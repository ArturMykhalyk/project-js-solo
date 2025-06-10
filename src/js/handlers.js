import { getArtistId, getArtistIdAlbums, getArtists } from './artists-api';
import { getTotalPage, setTotalPage } from './constants';
import { openModal } from './modal';

import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

import spriteUrl from './sprite';
import {
  addMoreBtnArtists,
  createAllAlbums,
  createArtists,
  createModalBiography,
  hideLoader,
  hideLoadMoreButton,
  showLoader,
  showLoadMoreButton,
} from './render-function';
import refs from './refs';

const paginationOptions = {
  totalItems: getTotalPage(),
  itemsPerPage: 8,
  visiblePages: 5,
  centerAlign: true,
  usageStatistics: false,
  template: {
    page: '<a href="#" class="custom-page" >{{page}}</a>',
    currentPage: '<strong class="custom-page active">{{page}}</strong>',
    moveButton: `<a href="#" class="custom-move {{type}}">   <svg class="custom-move-icon">
            <use href="${spriteUrl}#icon-bottom-arrow"></use>
          </svg></a>`,
    disabledMoveButton: '<span class="custom-disabled {{type}}">×</span>',
    moreButton: '<a href="#" class="custom-more">…</a>',
  },
};
if (window.innerWidth < 1440) {
  paginationOptions.visiblePages = 3;
}
if (window.innerWidth < 768) {
  paginationOptions.visiblePages = 1;
}
export function handleScrollBtn() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

const valueFilters = {
  currentPage: 1,
  name: '',
  sortName: '',
  genre: '',
  deleteData() {
    this.name = '';
    this.sortName = '';
    this.genre = '';
    this.currentPage = 1;
  },
};

export const pagination = new Pagination(
  refs.paginationContainer,
  paginationOptions
);

pagination.on('beforeMove', handlePageMove);
pagination.on('afterMove', insertLastPageButton);
insertLastPageButton();

function handlePageMove(evt) {
  const currentPage = evt.page;
  valueFilters.currentPage = currentPage - 1;
  refs.artistsList.innerHTML = '';
  const headerOffset = refs.headerElem.offsetHeight;

  const elementPosition = refs.artistsList.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
  handleMoreBtn();
}

export async function handleMoreBtn() {
  showLoader(refs.loader);
  hideLoadMoreButton();
  valueFilters.currentPage++;
  pagination.off('beforeMove');
  pagination.movePageTo(valueFilters.currentPage);
  pagination.on('beforeMove', handlePageMove);
  const artists = await getArtists(valueFilters);
  hideLoader(refs.loader);
  showLoadMoreButton();
  addMoreBtnArtists(artists.artists);
  if (!(getTotalPage() > valueFilters.currentPage)) {
    hideLoadMoreButton();
  }
}

export async function handleLearnMoreArtist(e) {
  if (e.target.className !== 'artist--btn') {
    return;
  }
  refs.modalArtisTAlbums.innerHTML = '';
  refs.modalArtistBiography.innerHTML = '';
  openModal();
  const genres = e.target.parentElement.children[1].innerHTML;
  const id = e.target.dataset.id;
  showLoader(refs.modalLoader);
  const artistInfo = await getArtistId(id);
  const artistAlbumInfo = await getArtistIdAlbums(id);
  hideLoader(refs.modalLoader);
  createModalBiography(artistInfo, genres);
  createAllAlbums(artistAlbumInfo.albumsList);
}

function handleSelectedSort(e) {
  const isOpen = refs.customSortDropBlock.classList.contains('open');
  closeAllDropdowns();
  if (!isOpen) {
    refs.customSortDropBlock.classList.add('open');
    refs.customSortDropSelected.classList.add('opensort');
    refs.customSortDropSelected.children[1].classList.add('rotete-icon');
  }
}
function handleSelectedGenre(e) {
  const isOpen = refs.customGenreDropBlock.classList.contains('open');
  closeAllDropdowns();
  if (!isOpen) {
    refs.customGenreDropBlock.classList.add('open');
    refs.customGenreDropSelected.classList.add('opensort');
    refs.customGenreDropSelected.children[1].classList.add('rotete-icon');
  }
}

export function handleArtistsFilter(e) {
  if (e.target.nextElementSibling.style.display === 'flex') {
    e.target.nextElementSibling.style.display = 'none';
    refs.customSortDropSelected.removeEventListener(
      'click',
      handleSelectedSort
    );
    refs.customGenreDropSelected.removeEventListener(
      'click',
      handleSelectedGenre
    );
    refs.searchInput.removeEventListener('focus', closeAllDropdowns);
    refs.searchInput.removeEventListener('click', closeAllDropdowns);

    refs.customSortDropBlock.removeEventListener('click', sortValueDrop);
    refs.customGenreDropBlock.removeEventListener('click', genreValueDrop);
    document.removeEventListener('click', clickNoDrops);
  } else {
    e.target.nextElementSibling.style.display = 'flex';
    refs.customSortDropSelected.addEventListener('click', handleSelectedSort);
    refs.customGenreDropSelected.addEventListener('click', handleSelectedGenre);
    refs.searchInput.addEventListener('focus', closeAllDropdowns);
    refs.searchInput.addEventListener('focus', () => {
      refs.searchInput.addEventListener('keydown', blurInput);
      refs.searchIconBtn.addEventListener('click', blurInputSearchIcon);
    });
    refs.searchInput.addEventListener('remove', nameValueDrop);
    refs.searchInput.addEventListener('click', closeAllDropdowns);
    refs.searchInput.addEventListener('change', nameValueDrop);
    refs.customSortDropBlock.addEventListener('click', sortValueDrop);
    refs.customGenreDropBlock.addEventListener('click', genreValueDrop);
    document.addEventListener('click', clickNoDrops);
  }
}
function clickNoDrops(e) {
  const isInside =
    refs.customSortDrop.contains(e.target) ||
    refs.customGenreDropBlock.contains(e.target) ||
    refs.customSortDropSelected.contains(e.target) ||
    refs.customGenreDropSelected.contains(e.target);

  if (!isInside && e.target !== refs.searchInput) {
    closeAllDropdowns();
  }
}
function closeAllDropdowns() {
  refs.customSortDropBlock.classList.remove('open');
  refs.customSortDropSelected.classList.remove('opensort');
  refs.customSortDropSelected.children[1].classList.remove('rotete-icon');
  refs.customGenreDropBlock.classList.remove('open');
  refs.customGenreDropSelected.classList.remove('opensort');
  refs.customGenreDropSelected.children[1].classList.remove('rotete-icon');
}
function blurInputSearchIcon(e) {
  e.target.blur();
}
function blurInput(e) {
  if (e.key === 'Enter') {
    e.target.blur();
  }
}
//обробка інпута
function nameValueDrop(e) {
  valueFilters.name = e.target.value.trim().toLowerCase();
  refs.searchInput.removeEventListener('keydown', blurInput);
  refs.searchIconBtn.removeEventListener('click', blurInputSearchIcon);
  valueFilters.currentPage = 1;

  filtersRender();
}
// Обробка вибору сортування
function sortValueDrop(e) {
  if (e.target.tagName === 'LI') {
    const value = e.target.getAttribute('data-value');
    const label = e.target.textContent;

    valueFilters.sortName = value === 'default' ? '' : value;
    refs.customSortDropSelectedText.textContent =
      label === 'Default' ? 'Sorting: default' : `Sorting: ${label}`;

    closeAllDropdowns();

    valueFilters.currentPage = 1;

    filtersRender();
  }
}
// Обробка вибору жанру
function genreValueDrop(e) {
  if (e.target.tagName === 'LI') {
    const value = e.target.getAttribute('data-value');
    const label = e.target.textContent;

    valueFilters.genre = value;
    refs.customGenreDropSelectedText.textContent = `Genre: ${label}`;

    closeAllDropdowns();
    valueFilters.currentPage = 1;

    filtersRender();
  }
}
//обробка reset
export function handleResetFilter() {
  refs.notFoundBtnReset.removeEventListener('click', handleResetFilter);
  refs.customSortDropSelectedText.textContent = `Sorting`;
  refs.customGenreDropSelectedText.textContent = `Genre`;
  refs.searchInput.value = '';
  valueFilters.deleteData();

  filtersRender();
}

async function filtersRender() {
  refs.paginationContainer.style.display = 'flex';
  hideLoadMoreButton();
  refs.notFoundFilter.classList.remove('visible');
  refs.artistsList.innerHTML = '';
  showLoader(refs.loader);

  const artists = await getArtists(valueFilters);
  if (!artists.totalArtists) {
    refs.paginationContainer.style.display = 'none';
    refs.notFoundFilter.classList.add('visible');
    refs.notFoundBtnReset.addEventListener('click', handleResetFilter);
  }
  pagination.reset(artists.totalArtists);
  setTotalPage(artists.totalArtists / 8);
  insertLastPageButton();
  hideLoader(refs.loader);
  createArtists(artists.artists);

  if (getTotalPage() > 1) {
    showLoadMoreButton();
    refs.moreBtn.addEventListener('click', handleMoreBtn);
  }
}

export function insertLastPageButton() {
  insertFirstPageButton();
  const container = refs.paginationContainer;
  if (!container) return;

  const existing = container.querySelector('.last-page-btn');
  if (existing) existing.remove();

  const lastPage = getTotalPage();
  const currentPage = pagination.getCurrentPage();

  // Зібрати всі вже відображені сторінки
  const existingPages = [...container.querySelectorAll('.custom-page')]
    .map(btn => Number(btn.textContent))
    .filter(n => !isNaN(n));

  // Якщо остання сторінка вже є — не дублюємо
  if (existingPages.includes(lastPage)) return;

  const isActive = currentPage === lastPage ? ' active' : '';
  const lastBtnHTML = `
    <a href="#" class="custom-page last-page-btn${isActive}" data-page="${lastPage}">
      ${lastPage}
    </a>
  `;

  // Шукаємо останню кнопку "..."
  const moreButtons = container.querySelectorAll('.custom-more');
  const lastMore = moreButtons[moreButtons.length - 1];

  if (lastMore) {
    // Вставляємо HTML
    lastMore.insertAdjacentHTML('afterend', lastBtnHTML);

    // Додаємо обробник подій вже до вставленого елемента
    const insertedBtn = container.querySelector('.last-page-btn');
    if (insertedBtn) {
      insertedBtn.addEventListener('click', e => {
        e.preventDefault();
        pagination.movePageTo(lastPage);
      });
    }
  }
}

function insertFirstPageButton() {
  const container = refs.paginationContainer;
  if (!container) return;

  // Видалити стару кнопку, якщо існує
  const existing = container.querySelector('.first-page-btn');
  if (existing) existing.remove();

  const currentPage = pagination.getCurrentPage();
  const firstPage = 1;

  // Перевірити, чи 1 вже в DOM
  const existingPages = [...container.querySelectorAll('.custom-page')]
    .map(btn => Number(btn.textContent))
    .filter(n => !isNaN(n));

  if (existingPages.includes(firstPage)) return;

  const isActive = currentPage === firstPage ? ' active' : '';
  const firstBtnHTML = `
    <a href="#" class="custom-page first-page-btn${isActive}" data-page="1">1</a>
  `;

  // Вставити перед першим `...`
  const moreButtons = container.querySelectorAll('.custom-more');
  const firstMore = moreButtons[0];

  if (firstMore) {
    firstMore.insertAdjacentHTML('beforebegin', firstBtnHTML);

    const insertedBtn = container.querySelector('.first-page-btn');
    if (insertedBtn) {
      insertedBtn.addEventListener('click', e => {
        e.preventDefault();
        pagination.movePageTo(1);
      });
    }
  }
}

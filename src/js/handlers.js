import { getArtistId, getArtistIdAlbums, getArtists } from './artists-api';
import { getTotalPage, setTotalPage } from './constants';
import { openModal } from './modal';
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
export async function handleMoreBtn() {
  showLoader(refs.loader);
  hideLoadMoreButton();
  valueFilters.currentPage++;
  const artists = await getArtists(valueFilters);
  console.log(artists);
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
    refs.searchInput.addEventListener('remove', nameValueDrop);
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
  hideLoadMoreButton();
  refs.notFoundFilter.classList.remove('visible');
  refs.artistsList.innerHTML = '';
  showLoader(refs.loader);
  const artists = await getArtists(valueFilters);
  if (!artists.totalArtists) {
    refs.notFoundFilter.classList.add('visible');
    refs.notFoundBtnReset.addEventListener('click', handleResetFilter);
  }
  setTotalPage(artists.totalArtists / 8);

  hideLoader(refs.loader);
  createArtists(artists.artists);

  if (getTotalPage() > 1) {
    showLoadMoreButton();
    refs.moreBtn.addEventListener('click', handleMoreBtn);
  }
}

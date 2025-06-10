import { getArtists, getFeedBack, getGenres } from './js/artists-api';
import { getTotalPage, setTotalPage } from './js/constants';
import {
  handleArtistsFilter,
  handleLearnMoreArtist,
  handleMoreBtn,
  handleResetFilter,
  handleScrollBtn,
  insertLastPageButton,
} from './js/handlers';
import { handleOpenMobileMenu } from './js/mobile-menu';
import { openModalFeedBack } from './js/modal';

import {
  createArtists,
  createFeedBack,
  createGenre,
  hideLoader,
  showLoader,
  showLoadMoreButton,
} from './js/render-function';
import { pagination } from './js/handlers';
import { feedBackSubmit } from './js/modal-feed-back';
import refs from './js/refs';
refs.mobileMenuOpen.addEventListener('click', handleOpenMobileMenu);
refs.artistsList.addEventListener('click', handleLearnMoreArtist);
refs.feedBackBtn.addEventListener('click', openModalFeedBack);

refs.modalFeedBackForm.addEventListener('submit', feedBackSubmit);
async function initMainPage() {
  document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth >= 1440) {
      refs.artistsFilterBtn.dispatchEvent(new Event('click'));
    }
  });

  const genre = await getGenres();
  createGenre(genre);
  showLoader(refs.loader);
  const artists = await getArtists();
  hideLoader(refs.loader);
  createArtists(artists.artists);
  pagination.reset(artists.totalArtists);
  setTotalPage(artists.totalArtists / 8);
  insertLastPageButton();

  if (getTotalPage() > 1) {
    showLoadMoreButton();
    refs.moreBtn.addEventListener('click', handleMoreBtn);
  }

  const feedBacks = await getFeedBack();
  createFeedBack(feedBacks.data);
}

initMainPage();

refs.artistsFilterBtn.addEventListener('click', handleArtistsFilter);
refs.resetFilter.addEventListener('click', handleResetFilter);

// Показувати кнопку при прокрутці
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    refs.scrollBtn.classList.add('visible');
    refs.scrollBtn.addEventListener('click', handleScrollBtn);
  } else {
    refs.scrollBtn.classList.remove('visible');
    refs.scrollBtn.removeEventListener('click', handleScrollBtn);
  }
});

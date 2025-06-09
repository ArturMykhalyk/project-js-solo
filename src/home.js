import { getArtists, getFeedBack, getGenres } from './js/artists-api';
import { getTotalPage, setTotalPage } from './js/constants';
import {
  handleArtistsFilter,
  handleLearnMoreArtist,
  handleMoreBtn,
  handleResetFilter,
} from './js/handlers';
import { handleOpenMobileMenu } from './js/mobile-menu';
import { openModal } from './js/modal';
import refs from './js/refs';

import {
  createArtists,
  createFeedBack,
  createGenre,
  hideLoader,
  showLoader,
  showLoadMoreButton,
} from './js/render-function';
// openModal();

refs.mobileMenuOpen.addEventListener('click', handleOpenMobileMenu);
refs.artistsList.addEventListener('click', handleLearnMoreArtist);
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

  setTotalPage(artists.totalArtists / 8);

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

import { getArtists } from './js/artists-api';
import { getTotalPage, setTotalPage } from './js/constants';
import { handleMoreBtn } from './js/handlers';
import { handleOpenMobileMenu } from './js/mobile-menu';
import { openModal } from './js/modal';
import refs from './js/refs';
import {
  createArtists,
  hideLoader,
  showLoader,
  showLoadMoreButton,
} from './js/render-function';
// openModal();

refs.mobileMenuOpen.addEventListener('click', handleOpenMobileMenu);
async function initMainPage() {
  showLoader();
  const artists = await getArtists();
  hideLoader();
  createArtists(artists.artists);

  setTotalPage(artists.totalArtists / 8);

  if (getTotalPage() > 1) {
    showLoadMoreButton();
    refs.moreBtn.addEventListener('click', handleMoreBtn);
  }
}

initMainPage();

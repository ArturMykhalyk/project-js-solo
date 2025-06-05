import { getArtists } from './js/artists-api';
import { handleOpenMobileMenu } from './js/mobile-menu';
import { openModal } from './js/modal';
import refs from './js/refs';
import { createArtists } from './js/render-function';
// openModal();

refs.mobileMenuOpen.addEventListener('click', handleOpenMobileMenu);
async function initMainPage() {
  const artists = await getArtists();
  createArtists(artists.artists);
}

initMainPage();

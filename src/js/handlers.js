import { getArtistId, getArtistIdAlbums, getArtists } from './artists-api';
import { getTotalPage } from './constants';
import { openModal } from './modal';
import {
  addMoreBtnArtists,
  createAllAlbums,
  createModalBiography,
  hideLoader,
  hideLoadMoreButton,
  showLoader,
  showLoadMoreButton,
} from './render-function';
import refs from './refs';
let page = 1;

export async function handleMoreBtn() {
  if (getTotalPage() > page) {
    showLoader(refs.loader);
    hideLoadMoreButton();
    const artists = await getArtists({ currentPage: ++page });
    hideLoader(refs.loader);
    showLoadMoreButton();
    addMoreBtnArtists(artists.artists);
  } else {
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

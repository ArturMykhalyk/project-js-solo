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

let page = 1;

export async function handleMoreBtn() {
  if (getTotalPage() > page) {
    showLoader();
    hideLoadMoreButton();
    const artists = await getArtists({ currentPage: ++page });
    hideLoader();
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

  openModal();
  const genres = e.target.parentElement.children[1].innerHTML;
  const id = e.target.dataset.id;

  const artistInfo = await getArtistId(id);
  createModalBiography(artistInfo, genres);
  const artistAlbumInfo = await getArtistIdAlbums(id);
  createAllAlbums(artistAlbumInfo.albumsList);
  console.log('artist', artistInfo);
  console.log('album', artistAlbumInfo.albumsList);
}

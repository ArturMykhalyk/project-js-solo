import { getArtists } from './artists-api';
import { getTotalPage } from './constants';
import {
  addMoreBtnArtists,
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

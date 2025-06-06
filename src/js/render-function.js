import refs from './refs';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

function createArtistsMarkup(artists) {
  return artists
    .map(
      ({
        _id,
        strArtist,
        strArtistThumb,
        strBiographyEN,
        genres,
      }) => `<li class="artists--list__item">
        <img
          class="artists--photo"
          src="${strArtistThumb}"
          alt="${strArtist}"
        />
        <ul class="artists--genres">
        ${genres
          .map(
            genre => `<li class="artists--genres__item"><p>${genre}</p></li>`
          )
          .join('')}
        </ul>
        <h3 class="artists--name">${strArtist}</h3>
        <p class="artists--descr">${strBiographyEN}</p>
        <button class="artist--btn" data-id="${_id}">
          Learn More
          <svg class="hero-icon" >
            <use href="/img/sprite.svg#icon-right-arrow-full"></use>
          </svg>
        </button>
      </li>
  `
    )
    .join('');
}

export function createArtists(artists) {
  refs.artistsList.innerHTML = createArtistsMarkup(artists);
}
export function addMoreBtnArtists(artists) {
  refs.artistsList.insertAdjacentHTML(
    'beforeend',
    createArtistsMarkup(artists)
  );
}
export function showLoader() {
  refs.loader.classList.add('visible');
}
export function hideLoader() {
  refs.loader.classList.remove('visible');
}
export function showLoadMoreButton() {
  refs.moreBtn.classList.add('visible');
}
export function hideLoadMoreButton() {
  refs.moreBtn.classList.remove('visible');
}

export function createFeedBack(feedBacks) {
  const feedBackMarcup = feedBacks
    .map(
      ({
        _id,
        name,
        rating,
        descr,
      }) => `<div class="swiper-slide" data-id="${_id}">
<p>${rating}</p>
<p>${descr}</p>
<p>${name}</p>

</div>`
    )
    .join('');

  const markup = `
  <div class="swiper modal-product__slider">
<div class="swiper-wrapper">
  ${feedBackMarcup}
</div>
<div class="swiper-button-next"></div>
<div class="swiper-button-prev"></div>
<div class="swiper-pagination"></div>
</div>`;
  refs.feedBack.innerHTML = markup;

  new Swiper('.modal-product__slider', {
    modules: [Navigation, Pagination, Autoplay],

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 5000,
    },
  });
}

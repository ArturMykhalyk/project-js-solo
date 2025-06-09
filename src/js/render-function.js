import refs from './refs';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'css-star-rating/css/star-rating.min.css';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import spriteUrl from './sprite';

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
            <use href="${spriteUrl}#icon-right-arrow-full"></use>
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
  const markup = feedBacks
    .map(
      ({
        _id,
        name,
        rating,
        descr,
      }) => `<div class="swiper-slide" data-id="${_id}">


 <div class="rating  value-${Math.round(rating)}">
      <div class="star-container">
        <div class="star">
          <svg class="star-empty">
            <use href="${spriteUrl}#icon-star-empty"></use>
          </svg>
          <svg class="star-filled">
            <use href="${spriteUrl}#icon-star-full"></use>
          </svg>
        </div>
        <div class="star">
          <svg class="star-empty">
            <use href="${spriteUrl}#icon-star-empty"></use>
          </svg>
          <svg class="star-filled">
            <use href="${spriteUrl}#icon-star-full"></use>
          </svg>
        </div>
        <div class="star">
          <svg class="star-empty">
            <use href="${spriteUrl}#icon-star-empty"></use>
          </svg>
          <svg class="star-filled">
            <use href="${spriteUrl}#icon-star-full"></use>
          </svg>
        </div>
        <div class="star">
          <svg class="star-empty">
            <use href="${spriteUrl}#icon-star-empty"></use>
          </svg>
          <svg class="star-filled">
            <use href="${spriteUrl}#icon-star-full"></use>
          </svg>
        </div>
        <div class="star">
          <svg class="star-empty">
            <use href="${spriteUrl}#icon-star-empty"></use>
          </svg>
          <svg class="star-filled">
            <use href="${spriteUrl}#icon-star-full"></use>
          </svg>
        </div>
      </div>
    </div>
<p class='feed-back--descr'>${descr}</p>
<p class='feed-back--name'>${name}</p>

</div>`
    )
    .join('');

  refs.feedBack.innerHTML = markup;

  new Swiper('.modal-product__slider', {
    modules: [Navigation, Pagination, Autoplay],

    navigation: {
      nextEl: '.custom-next',
      prevEl: '.custom-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: false,
      type: 'custom',
    },
    autoplay: {
      delay: 5000,
    },
    on: {
      init() {
        updateCustomBullets(this.realIndex, this.slides.length);
        setupBulletClicks(this);
      },
      slideChange() {
        updateCustomBullets(this.realIndex, this.slides.length);
      },
    },
  });

  function updateCustomBullets(index, total) {
    const bullets = document.querySelectorAll('.swiper-pagination .bullet');
    bullets.forEach(b => b.classList.remove('swiper-pagination-bullet-active'));

    if (index === 0) {
      bullets[0].classList.add('swiper-pagination-bullet-active');
    } else if (index === total - 1) {
      bullets[2].classList.add('swiper-pagination-bullet-active');
    } else {
      bullets[1].classList.add('swiper-pagination-bullet-active');
    }
  }

  function setupBulletClicks(swiperInstance) {
    document.querySelector('.bullet.left')?.addEventListener('click', () => {
      swiperInstance.slideTo(0);
    });

    document.querySelector('.bullet.center')?.addEventListener('click', () => {
      swiperInstance.slideTo(Math.floor(swiperInstance.slides.length / 2));
    });

    document.querySelector('.bullet.right')?.addEventListener('click', () => {
      swiperInstance.slideTo(swiperInstance.slides.length - 1);
    });
  }
}

export function createModalBiography(
  {
    intDiedYear,
    intFormedYear,
    intMembers,
    strGender,
    strArtist,
    strArtistThumb,
    strBiographyEN,
    strCountry,
  },
  genres
) {
  const markup = `
   <p class="modal-biography__title">${strArtist}</p>
   <div class="modal-bbiography-desktop">     
   <img class="modal-biography__photo" src="${strArtistThumb}" alt="${strArtist}" />
        <div class="modal-biography__info">
        <div class="modal-biography___content">
        <p class="modal-biography___years">Years active</br> <span>${intFormedYear}-${
    intDiedYear ?? 'present'
  }</span></p>
        <p class="modal-biography___sex">Sex</br> <span>${strGender}</span></p>
        <p class="modal-biography___members">Members</br> <span>${intMembers}</span></p>
        <p class="modal-biography___country">Country</br> <span>${strCountry}</span></p>
        </div>
        <p class="modal-biography___biography">Biography</br> <span>${strBiographyEN}</span></p>
        <ul class="modal-biography__genre-list">${genres}</ul>
        </div></div>`;
  refs.modalArtistBiography.innerHTML = markup;
}
export function createAllAlbums(albumsList) {
  refs.modalArtisTAlbums.innerHTML = albumsList
    .map(album => renderAlbumMarkup(album))
    .join('');
}

function renderAlbumMarkup(album) {
  const tracksMarkup = album.tracks
    .map(track => {
      const minutes = Math.floor(track.intDuration / 60000);
      const seconds = Math.floor((track.intDuration % 60000) / 1000)
        .toString()
        .padStart(2, '0');
      return `
      <li class="modal-track-item">
        <span class="track-name">${track.strTrack}</span>
        <span class="track-time">${minutes}:${seconds}</span>
        <a class="track-link" href="${track.movie}">${
        track.movie
          ? `<svg class="track-link-youtube">
            <use href="${spriteUrl}#icon-youtube"></use>
          </svg>`
          : ''
      }</a>
      </li>
    `;
    })
    .join('');

  const markup = `
    <li class="modal-album-item">
      <h3 class="modal-album-title">${album.strAlbum}</h3>
      <ul class="modal-track-list">
            <li class="modal-track-item">
        <p class="modal-track-name-title track-name">Track</p>
        <p class="modal-track-time-title track-time">Time</p>
        <p class="modal-track-link-title track-link">Link</p>
      </li>
            ${tracksMarkup}
      </ul>
    </li>
  `;

  return markup;
}

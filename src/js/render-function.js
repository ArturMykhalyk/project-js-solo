import refs from './refs';

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

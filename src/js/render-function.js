import refs from './refs';

export function createArtists(artists) {
  const markup = artists
    .map(
      ({
        id,
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
        ${genres.map(genre => `<li><p>${genre}</p></li>`).join('')}
        </ul>
        <h3 class="artists--name">${strArtist}</h3>
        <p class="artists--descr">${strBiographyEN}</p>
        <button class="artist--btn">
          Learn More
          <svg class="hero-icon" data-id="${id}">
            <use href="/img/sprite.svg#icon-right-arrow"></use>
          </svg>
        </button>
      </li>
  `
    )
    .join('');

  refs.artistsList.innerHTML = markup;
}

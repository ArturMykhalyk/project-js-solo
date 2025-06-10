//Обʼєкт з посиланнями на ДОМ елементи

export default {
  mobileMenuOpen: document.getElementById('open-menu'),
  mobileMenuClose: document.getElementById('close-btn'),
  headerElem: document.querySelector('.header'),
  mobileMenuList: document.querySelector('.header-menu'),
  artistsList: document.querySelector('.artists-list'),
  loader: document.querySelector('.loader'),
  modalLoader: document.querySelector('.modal-loader'),
  moreBtn: document.querySelector('.moreButton'),
  feedBack: document.querySelector('.swiper-wrapper'),
  modal: document.querySelector('.modal'),
  modalFeedBack: document.querySelector('.modal-feed'),
  feedBackBtn: document.querySelector('.feed-back-btn'),
  closeModalBtn: document.querySelector('.modal__close-btn'),
  closeFeedModalBtn: document.querySelector('.modal__feed-close-btn'),
  modalArtistBiography: document.querySelector('.modal-biography'),
  modalArtisTAlbums: document.querySelector('.modal-albums'),

  artistsFilterBtn: document.querySelector('.artists-filters-btn'),
  customSortDrop: document.querySelector('.custom-sort-dropdown'),
  customSortDropBlock: document.querySelector('.dropdown-options-sort'),
  customGenreDropBlock: document.querySelector('.genre-dropdown-options-genre'),
  customSortDropSelected: document.querySelector('.dropdown-selected-sort'),
  customSortDropSelectedText: document.querySelector(
    '.dropdown-selected-sort-text'
  ),
  customGenreDropSelected: document.querySelector('.genre-dropdown-title'),
  customGenreDropSelectedText: document.querySelector(
    '.genre-dropdown-title-text'
  ),
  searchInput: document.querySelector('.artists-filters-search-box input'),
  resetFilter: document.querySelector('.artists-filters-btn___reset'),
  notFoundFilter: document.querySelector('.filter-not-found'),
  notFoundBtnReset: document.querySelector('.not-found-btn-reset'),
  searchIconBtn: document.querySelector('.search-icon'),
  paginationContainer: document.getElementById('tui-pagination-container'),
  scrollBtn: document.getElementById('scrollToTopBtn'),
  modalFeedRating: document.querySelector('.modal__feed-rating'),
  modalFeedBackForm: document.querySelector('.modal__feed-form'),
};

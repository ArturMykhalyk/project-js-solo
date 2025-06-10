import refs from './refs';

function openModalMain(modal, closeBtn, onClickOutsideTarget = modal) {
  modal.classList.add('modal--is-open');
  document.body.style.overflow = 'hidden';

  const close = () => closeModal(modal, closeBtn, close, onClickOutsideTarget);

  document.addEventListener('keydown', closeOnEsc);
  window.addEventListener('click', clickOutside);
  closeBtn.addEventListener('click', close);

  function closeOnEsc(event) {
    if (event.key === 'Escape') {
      close();
    }
  }

  function clickOutside(event) {
    if (event.target === onClickOutsideTarget) {
      close();
    }
  }

  function closeModal(modal, closeBtn, closeFn, outsideTarget) {
    modal.classList.remove('modal--is-open');
    document.body.style.overflow = '';
    document.removeEventListener('keydown', closeOnEsc);
    window.removeEventListener('click', clickOutside);
    closeBtn.removeEventListener('click', closeFn);
  }
}

//  для кожної модалки
export function openModal() {
  openModalMain(refs.modal, refs.closeModalBtn);
}

export function openModalFeedBack() {
  openModalMain(refs.modalFeedBack, refs.closeFeedModalBtn, refs.modalFeedBack);
}

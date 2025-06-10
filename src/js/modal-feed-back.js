//фідбек модал стар
import Raty from 'raty-js';
import 'raty-js/src/raty.css';
import refs from './refs';
import iconFullSvg from '/img/svg-icon/star-full.svg';
import iconEmptySvg from '/img/svg-icon/star-empty.svg';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { postFeedBack } from './artists-api';
const raty = new Raty(refs.modalFeedRating, {
  starOn: iconFullSvg,
  starOff: iconEmptySvg,

  space: false,
});

raty.init();

export async function feedBackSubmit(e) {
  e.preventDefault();
  const rating = raty.score();
  const name = e.target.elements.name.value.trim();
  const message = e.target.elements.message.value.trim();

  if (!(name.trim() && rating && message.trim())) {
    iziToast.error({
      message: `Fill out the form!!!`,
      position: 'topRight',
    });
    return;
  }

  const feedBack = await postFeedBack(name, rating, message);

  if (!feedBack) {
    return;
  }

  refs.modalFeedBack.classList.remove('modal--is-open');
  iziToast.success({
    message: `Feedback sent!!!`,
    position: 'topRight',
  });
  refs.modalFeedBackForm.reset();
}

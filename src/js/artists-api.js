import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export async function getGenres() {
  try {
    const baseURL = 'https://sound-wave.b.goit.study/api';
    const endPoint = `/genres`;
    const url = baseURL + endPoint;
    const res = await axios.get(url);
    return res.data;
  } catch (e) {
    iziToast.error({
      message: `${e}`,
      position: 'topRight',
    });
    return null;
  }
}

export async function getArtists({
  currentPage = 1,
  name = '',
  sortName = '',
  genre = '',
} = {}) {
  try {
    const baseURL = 'https://sound-wave.b.goit.study/api';
    const endPoint = '/artists';
    const url = baseURL + endPoint;
    const params = {
      limit: 8,
      page: currentPage,
      ...(name && { name }),
      ...(sortName && { sortName }),
      ...(genre && { genre }),
    };

    const res = await axios.get(url, { params });
    return res.data;
  } catch (e) {
    iziToast.error({
      message: `${e}`,
      position: 'topRight',
    });
    return null;
  }
}

export async function getArtistId(id = '65ada227af9f6d155db46908') {
  try {
    const baseURL = 'https://sound-wave.b.goit.study/api';
    const endPoint = `/artists/${id}`;
    const url = baseURL + endPoint;
    const res = await axios.get(url);
    return res.data;
  } catch (e) {
    iziToast.error({
      message: `${e}`,
      position: 'topRight',
    });
    return null;
  }
}

export async function getArtistIdAlbums(id = '65ada227af9f6d155db46908') {
  try {
    const baseURL = 'https://sound-wave.b.goit.study/api';
    const endPoint = `/artists/${id}/albums`;
    const url = baseURL + endPoint;
    const res = await axios.get(url);
    return res.data;
  } catch (e) {
    iziToast.error({
      message: `${e}`,
      position: 'topRight',
    });
    return null;
  }
}

export async function getFeedBack() {
  try {
    const baseURL = 'https://sound-wave.b.goit.study/api';
    const endPoint = '/feedbacks';
    const url = baseURL + endPoint;
    const params = {
      limit: 12,
    };

    const res = await axios.get(url, { params });
    return res.data;
  } catch (e) {
    iziToast.error({
      message: `${e}`,
      position: 'topRight',
    });
    return null;
  }
}

export async function postFeedBack(name, rating, descr) {
  try {
    const baseURL = 'https://sound-wave.b.goit.study/api';
    const endPoint = `/feedbacks`;
    const url = baseURL + endPoint;
    const data = {
      name: name,
      rating: rating,
      descr: descr,
    };
    const res = await axios.post(url, data);
    return res.data;
  } catch (e) {
    iziToast.error({
      message: `${e}`,
      position: 'topRight',
    });
    return null;
  }
}

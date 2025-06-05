import axios from 'axios';

export async function getArtists(currentPage = 1) {
  try {
    const baseURL = 'https://sound-wave.b.goit.study/api';
    const endPoint = '/artists';
    const url = baseURL + endPoint;
    const params = {
      limit: 8,
      page: currentPage,
    };

    const res = await axios.get(url, { params });
    return res.data;
  } catch (e) {
    console.log(e);
    return null;
  }
}

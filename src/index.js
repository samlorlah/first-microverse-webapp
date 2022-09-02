import './style.css';
import TvShows from './modules/tvShow.js';

const shows = new TvShows();

window.onload = async () => {
  await shows.getShows();
};

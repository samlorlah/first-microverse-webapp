import { getShows, getLikes, likeShowOps } from './apiOperations.js';

export default class TvShows {
  displayCard(show, like) {
    let likeCount = 0;
    if (like.length > 0) {
      likeCount = like[0].likes;
    }

    const card = document.createRange().createContextualFragment(`
    <div class="card">
      <img src="${show.image.medium}" alt="${show.name}" class="card-img">
      <div class="card-details">
      <h3>${show.name.toUpperCase()}</h3>
      <div class="like-section">
      <span data-id="${show.id}" id="like_btn_${show.id}">
      <i class="fa-regular fa-heart fa-2x"></i>
      </span>
      <p id="likeCount_displayed_${show.id}">${likeCount} ${likeCount > 1 ? 'Likes' : 'Like'}</p>
      </div>
      </div>
      <div class="card-btns">
      <button data-id="${show.id}" class="comment-btn" type="button">Comments</button>
      </div>
      </div>`);

    const cardContainer = document.querySelector('.main-container');
    cardContainer.append(card);

    const likeBtnEvent = document.querySelector(`#like_btn_${show.id}`);
    const likeCountDisplayed = document.querySelector(`#likeCount_displayed_${show.id}`);
    likeBtnEvent.addEventListener('click', async () => {
      const id = likeBtnEvent.getAttribute('data-id');
      const child = likeBtnEvent.childNodes;
      child[1].classList.add('liked');
      await this.likeShow(id);
      const currentLike = parseInt(likeCountDisplayed.innerHTML.split(' ')[0], 10);
      const newLike = currentLike + 1;
      if (newLike > 1) {
        likeCountDisplayed.innerHTML = `${newLike} Likes`;
      } else {
        likeCountDisplayed.innerHTML = `${newLike} Like`;
      }
      child[1].classList.remove('liked');
    });
  }

  async getShows() {
    const shows = await getShows();
    const likes = await getLikes();
    const showCount = document.querySelector('#show_count');
    showCount.innerHTML = this.countShows(shows);
    shows.forEach((show) => {
      const like = likes.filter((like) => {
        if (parseInt(like.item_id, 10) === parseInt(show.id, 10)) {
          return like;
        }
        return false;
      });
      this.displayCard(show, like);
    });
  }

  countShows(shows) {
    this.length = shows.length;
    return this.length;
  }

  async likeShow(showId) {
    this.res = await likeShowOps(showId);
  }
}

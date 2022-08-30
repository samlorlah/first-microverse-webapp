import {getShows, getLikes, likeShow} from './apiOperations.js';


export default class TvShows {
  displayCard(show, like) {
    let like_count = 0;
    like.length > 0 ? like_count = like[0].likes : 0;
    const card = document.createRange().createContextualFragment(`
    <div class="card">
      <img src="${show.image.medium}" alt="${show.name}" class="card-img">
      <div class="card-details">
      <h3>${show.name.toUpperCase()}</h3>
      <div class="like-section">
      <span data-id="${show.id}" id="like_btn_${show.id}">
      <i class="fa-regular fa-heart fa-2x"></i>
      </span>
      <p id="like_count_displayed_${show.id}">${like_count} ${like_count > 1 ? 'Likes' : 'Like'}</p>
      </div>
      </div>
      <div class="card-btns">
      <button data-id="${
        show.id
      }" class="comment-btn" type="button">Comments</button>
      </div>
      </div>`);
      
    const card_container = document.querySelector('.main-container');
    card_container.append(card);
    
    const likeBtnEvent = document.querySelector(`#like_btn_${show.id}`);
    const likeCountDisplayed = document.querySelector(`#like_count_displayed_${show.id}`);
    likeBtnEvent.addEventListener('click', async () => {
      const id = likeBtnEvent.getAttribute('data-id');
      const child = likeBtnEvent.childNodes;
      child[1].classList.add("liked");
      await this.likeShow(id);
      let currentLike = parseInt(likeCountDisplayed.innerHTML.split(" ")[0]);
      const newLike = currentLike + 1;
      if(newLike > 1)
      {
        likeCountDisplayed.innerHTML = `${newLike} Likes`
      }else {
        likeCountDisplayed.innerHTML = `${newLike} Like`;
      }
      child[1].classList.remove('liked');
    });
  }

  async getShows(){
    const shows = await getShows();
    const likes = await getLikes();
    const showCount = document.querySelector('#show_count');
    showCount.innerHTML = shows.length;
    shows.forEach((show, index) => {
      const like = likes.filter((like) => {if(like.item_id == show.id) {return like}});
      this.displayCard(show, like);
    });
  }

  async likeShow(showId) {
    const res = await likeShow(showId);
  }
}


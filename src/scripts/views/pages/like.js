import FavoriteRestIdb from '../../data/favorite-rest-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
      <div class="content">
        <h2 class="latest__label">Your Liked Restaurant</h2>
        <div id="coffes" class="coffes">
 
        </div>
      </div>
    `;
  },

  async afterRender() {
    const rests = await FavoriteRestIdb.getAllRestaurants();
    const restsContainer = document.querySelector('#coffes');

    rests.forEach((rest) => {
      restsContainer.innerHTML += createRestaurantItemTemplate(rest);
    });
  },
};

export default Like;

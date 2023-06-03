import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const DaftarRestaurant = {
  async render() {
    return `
      <div class="content">
        <div class="jumbotron">
            <img src="./hero-image_1.jpg" alt="Gambar Jumbotron">
        </div>
        <h2 class="latest__label">Daftar Restaurant</h2>
          <div id="coffes" class="coffes">
        </div>
      </div>
      `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.dataRestaurant();
    const restaurantsContainer = document.querySelector('#coffes');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default DaftarRestaurant;

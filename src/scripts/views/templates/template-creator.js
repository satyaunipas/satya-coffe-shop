import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
<div class="detail">  
<h2 class="nama_rest">${restaurant.name}</h2>
  <img class="coffe__poster lazyload" data-src="https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="coffe__info">
    <h3 class="info">Informasi</h3>
    <h4>Kota</h4>
    <p>${restaurant.city}</p>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
    <h4>Alamat</h4>
    <p>${restaurant.address}</p>
  </div>
  <div class="coffe-item__content">
    <h3 class="info">Menu</h3>
    <div>
      <h4>Makanan</h4>
      <ul>
        ${restaurant.menus.foods
    .map((food) => `<li>${food.name}</li>`)
    .join('')}
      </ul>
    </div>
    <div class="coffe__menu__drinks">
      <h4>Minuman</h4>
      <ul>
        ${restaurant.menus.drinks
    .map((drink) => `<li>${drink.name}</li>`)
    .join('')}
      </ul>
    </div>
  </div>
  <div class="coffe__reviews">
    <h3 class="info">Ulasan Pelanggan</h3>
    <ul>
      ${restaurant.customerReviews
    .map(
      (review) => `
            <li>
              <p><strong>${review.name}</strong></p>
              <p>${review.review}</p>
              <p>${review.date}</p>
            </li>
          `,
    )
    .join('')}
    </ul>
  </div>
  <div class="coffe__overview">
    <h3 class="info">Deskripsi</h3>
    <p>${restaurant.description}</p>
  </div>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
<div class="coffe-item">
    <div class="coffe-item__header">
    <img class="coffe-item__header__poster lazyload" data-src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="${restaurant.name}">
      <div class="coffe-item__header__rating">
        <p>⭐️<span class="coffe-item__header__rating__score">${restaurant.rating}</span></p>
      </div>
    </div>
    <div class="coffe-item__content">
      <h3><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <p>${restaurant.description}</p>
    </div>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};

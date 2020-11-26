import {SortOptions} from "./const";

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};


export const getSortedOffersByType = (offers, sortType) => {
  switch (sortType) {
    case SortOptions.POPULAR:
      return offers;
    case SortOptions.PRICE_LOW_TO_HIGH:
      return offers.sort((a, b) => a.price - b.price);
    case SortOptions.PRICE_HIGH_TO_LOW:
      return offers.sort((a, b) => b.price - a.price);
    case SortOptions.TOP_RATED_FIRST:
      return offers.sort((a, b) => b.rating - a.rating);
  }
  return offers;
};


export const adaptOffer = (offer) => {
  return {
    id: offer[`id`],
    city: {
      name: offer[`city`][`name`],
      location: {
        latitude: offer[`city`][`location`][`latitude`],
        longitude: offer[`city`][`location`][`longitude`],
        zoom: offer[`city`][`location`][`zoom`]
      }
    },
    location: {
      latitude: offer[`location`][`latitude`],
      longitude: offer[`location`][`longitude`],
      zoom: offer[`location`][`zoom`]
    },
    pictures: offer[`images`],
    previewImage: offer[`preview_image`],
    isPremium: offer[`is_premium`],
    isFavorite: offer[`is_favorite`],
    price: offer[`price`],
    title: offer[`title`],
    type: offer[`type`],
    rating: offer[`rating`],
    description: offer[`description`],
    bedroomsCount: offer[`bedrooms`],
    guestsLimit: offer[`max_adults`],
    goods: offer[`goods`],
    host: {
      avatar: offer[`host`][`avatar_url`],
      name: offer[`host`][`name`],
      isPro: offer[`host`][`is_pro`],
    },
  };
};

export const adaptReview = (review) => {
  return {
    id: review[`id`],
    date: new Date(review[`date`]),
    text: review[`comment`],
    rating: review[`rating`],
    avatar: review[`user`][`avatar_url`],
    userName: review[`user`][`name`],
    userId: review[`user`][`id`],
    userIsPro: review[`user`][`is_pro`],
  };
};

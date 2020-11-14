export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS_LIST: `GET_OFFER_LIST`,
  SET_ACTIVE_OFFER_ID: `SET_ACTIVE_OFFER_ID`,
  RESET_ACTIVE_OFFER_ID: `SET_ACTIVE_OFFER_ID`,
  CHANGE_SORT_OPTIONS: `CHANGE_SORT_OPTIONS`,
  CHANGE_OFFERS_BY_SORT: `CHANGE_OFFERS_BY_SORT`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  LOAD_LOGGED_INFO: `LOAD_LOGGED_INFO`,
  LOAD_FAVORITE_OFFERS: `LOAD_FAVORITE_OFFERS`,
  CHANGE_FAVORITE_STATUS: `CHANGE_FAVORITE_STATUS`,
  LOAD_NEAR_OFFERS: `LOAD_NEAR_OFFERS`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  SEND_REVIEW: `SEND_REVIEW`,
  UPDATE_ERROR_STATUS: `UPDATE_ERROR_STATUS`
};

export const changeCity = (city) => ({
  type: ActionType.CHANGE_CITY,
  payload: city,
});

export const getOffersList = () => ({
  type: ActionType.GET_OFFERS_LIST,
});

export const setActiveOfferId = (id) => ({
  type: ActionType.SET_ACTIVE_OFFER_ID,
  payload: id,
});

export const resetActiveOfferId = () => ({
  type: ActionType.SET_ACTIVE_OFFER_ID,
  payload: -1,
});

export const changeSortOptions = (sortType) => ({
  type: ActionType.CHANGE_SORT_OPTIONS,
  payload: sortType,
});

export const changeOffersBySort = (sortType) => ({
  type: ActionType.CHANGE_OFFERS_BY_SORT,
  payload: sortType,
});

export const loadOffers = (offers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

export const setLoggedUser = (email) => ({
  type: ActionType.LOAD_LOGGED_INFO,
  payload: email,
});

export const loadFavoriteOffers = (favoriteOffers) => ({
  type: ActionType.LOAD_FAVORITE_OFFERS,
  payload: favoriteOffers
});


export const changeFavoriteStatus = (id, status) => ({
  type: ActionType.CHANGE_FAVORITE_STATUS,
  payload: id, status,
});

export const loadNearOffers = (nearOffers) => ({
  type: ActionType.LOAD_NEAR_OFFERS,
  payload: nearOffers,
});

export const loadReviews = (reviews) => ({
  type: ActionType.LOAD_REVIEWS,
  payload: reviews,
});

export const sendReview = (review, id) => ({
  type: ActionType.SEND_REVIEW,
  payload: review, id,
});

export const updateErrorStatus = (answer) => ({
  type: ActionType.UPDATE_ERROR_STATUS,
  payload: answer
});


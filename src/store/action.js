export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS_LIST: `GET_OFFER_LIST`,
  SET_ACTIVE_OFFER_ID: `SET_ACTIVE_OFFER_ID`,
  RESET_ACTIVE_OFFER_ID: `SET_ACTIVE_OFFER_ID`,
  CHANGE_SORT_OPTIONS: `CHANGE_SORT_OPTIONS`,
  CHANGE_OFFERS_BY_SORT: `CHANGE_OFFERS_BY_SORT`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`
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

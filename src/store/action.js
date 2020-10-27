export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS_LIST: `GET_OFFER_LIST`,
  SET_ACTIVE_OFFER_ID: `SET_ACTIVE_OFFER_ID`,
  RESET_ACTIVE_OFFER_ID: `SET_ACTIVE_OFFER_ID`,
  CHANGE_SORT_OPTIONS: `CHANGE_SORT_OPTIONS`,
  CHANGE_OFFERS_BY_SORT: `CHANGE_OFFERS_BY_SORT`,
};


export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  getOffersList: () => ({
    type: ActionType.GET_OFFERS_LIST,
  }),
  setActiveOfferId: (id) => ({
    type: ActionType.SET_ACTIVE_OFFER_ID,
    payload: id,
  }),
  resetActiveOfferId: () => ({
    type: ActionType.SET_ACTIVE_OFFER_ID,
    payload: -1,
  }),
  changeSortOptions: (sortType) => ({
    type: ActionType.CHANGE_SORT_OPTIONS,
    payload: sortType,
  }),
  changeOffersBySort: (sortType) => ({
    type: ActionType.CHANGE_OFFERS_BY_SORT,
    payload: sortType,
  }),

};

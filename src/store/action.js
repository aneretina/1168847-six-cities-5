export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS_LIST: `GET_OFFER_LIST`
};


export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  getOffersList: () => ({
    type: ActionType.GET_OFFERS_LIST,
    payload: []
  })
};

import {extend} from "../utils";
import {ActionType} from "./action";
import {CITIES} from "../const";
import offers from "../mocks/offers";


const initialState = {
  city: CITIES[0],
  currentCityOffers: offers.filter((offer) => offer.city === CITIES[0]),
  cities: CITIES,
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload,
      });
    case ActionType.GET_OFFERS_LIST:
      return extend(state, {
        currentCityOffers: offers.filter((offer) => offer.city === state.cities[state.activeCityIndex])
      });
  }

  return state;
};

export {reducer};

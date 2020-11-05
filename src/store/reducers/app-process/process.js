
import {CITIES, SortOptions} from "../../../const";
import {extend} from "../../../utils";
import {ActionType} from "../../action";


const initialState = {
  city: CITIES[0],
  currentCityOffers: [].filter((offer) => offer.city === CITIES[0]),
  cities: CITIES,
  activeOfferId: -1,
  currentSort: SortOptions.POPULAR,
};

const processApp = (state = initialState, action) => {
  // const offersFilteredByCity = [].filter((offer) => offer.city === state.city);
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload,
      });
    case ActionType.SET_ACTIVE_OFFER_ID:
      return extend(state, {
        activeOfferId: action.payload,
      });
    case ActionType.RESET_ACTIVE_OFFER_ID:
      return extend(state, {
        activeOfferId: action.payload,
      });
    // case ActionType.GET_OFFERS_LIST:
      // return extend(state, {
      // currentCityOffers: offersFilteredByCity,
      // });
    case ActionType.CHANGE_SORT_OPTIONS:
      return extend(state, {
        currentSort: action.payload,
      });

    // case ActionType.CHANGE_OFFERS_BY_SORT:
      // if (action.changeSortOptions === initialState.currentSort) {
        // return extend(state, {
          // currentCityOffers: offersFilteredByCity,
        // });
     // }
      // return extend(state, {
        // currentOffers: getSortedOffersByType(state.currentOffers, action.changeSortOptions),
      // });
  }
  return state;
};

export {processApp};


import {CITIES, SortOptions} from "../../../const";
import {extend, getSortedOffersByType} from "../../../utils";
import {ActionType} from "../../action";


const initialState = {
  currentCityOffers: [].filter((offer) => offer.city === CITIES[0]),
  cities: CITIES,
  activeOfferId: -1,
  currentSort: SortOptions.POPULAR,
  city: CITIES[0],
  nearOffers: [],
  favoriteOffers: []
};

const processApp = (state = initialState, action) => {
  const offersFilteredByCity = [].filter((offer) => offer.city === state.city);
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
    case ActionType.GET_OFFERS_LIST:
      return extend(state, {
        currentCityOffers: offersFilteredByCity,
      });
    case ActionType.CHANGE_SORT_OPTIONS:
      return extend(state, {
        currentSort: action.payload,
      });

    case ActionType.CHANGE_OFFERS_BY_SORT:
      if (action.changeSortOptions === initialState.currentSort) {
        return extend(state, {
          currentCityOffers: offersFilteredByCity,
        });
      }
      return extend(state, {
        currentOffers: getSortedOffersByType(state.currentOffers, action.changeSortOptions),
      });

    case ActionType.LOAD_FAVORITE_OFFERS:
      return extend(state, {
        favoriteOffers: action.payload
      });

    case ActionType.LOAD_NEAR_OFFERS:
      return extend(state, {
        nearOffers: action.payload,
      });

  }

  return state;
};

export {processApp};

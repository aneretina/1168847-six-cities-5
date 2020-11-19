
import {CITIES, SortOptions} from "../../../const";
import {extend, getSortedOffersByType} from "../../../utils";
import {ActionType} from "../../action";


const initialState = {
  currentCityOffers: [],
  cities: CITIES,
  activeOfferId: -1,
  currentSort: SortOptions.POPULAR,
  city: CITIES[0],
  nearOffers: [],
  favoriteOffers: [],
  reviews: [],
};

const processApp = (state = initialState, action) => {
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
    case ActionType.CHANGE_SORT_OPTIONS:
      return extend(state, {
        currentSort: action.payload,
      });

    case ActionType.CHANGE_OFFERS_BY_SORT:
      if (action.changeSortOptions === initialState.currentSort) {
        return extend(state, {
          offers: action.payload,
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

    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: action.payload,
      });
  }

  return state;
};

export {processApp};

import {ActionType} from "../../action";
import {SortOptions, CITIES} from "../../../const";
import {processApp} from "./process";
import {reviewsMock} from "../../../mocks/reviews";
import {offersMock} from "../../../mocks/offers";

describe(`Process reducers work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(processApp(void 0, {})).toEqual({
      cities: CITIES,
      activeOfferId: -1,
      currentSort: SortOptions.POPULAR,
      city: CITIES[0],
      nearOffers: [],
      favoriteOffers: [],
      reviews: [],
    });
  });

  it(`Reducer should change city`, () => {
    expect(processApp({
      city: CITIES[0],
    }, {
      type: ActionType.CHANGE_CITY,
      payload: CITIES[1],
    })).toEqual({
      city: CITIES[1],
    });
  });

  it(`Reducer should set active offer id`, () => {
    expect(processApp({
      activeOfferId: 1,
    }, {
      type: ActionType.SET_ACTIVE_OFFER_ID,
      payload: 2,
    })).toEqual({
      activeOfferId: 2,
    });
  });

  it(`Reducer should reset active offer id`, () => {
    expect(processApp({
      activeOfferId: 2,
    }, {
      type: ActionType.RESET_ACTIVE_OFFER_ID,
      payload: -1,
    })).toEqual({
      activeOfferId: -1,
    });
  });

  it(`Reducer should change sort options`, () => {
    expect(processApp({
      currentSort: SortOptions.POPULAR,
    }, {
      type: ActionType.CHANGE_SORT_OPTIONS,
      payload: SortOptions.TOP_RATED_FIRST
    })).toEqual({
      currentSort: SortOptions.TOP_RATED_FIRST,
    });
  });

  it(`Reducer should update favorite offers`, () => {
    expect(processApp({
      favoriteOffers: [],
    }, {
      type: ActionType.LOAD_FAVORITE_OFFERS,
      payload: offersMock,
    })).toEqual({
      favoriteOffers: offersMock
    });
  });

  it(`Reducer should update near offers`, () => {
    expect(processApp({
      nearOffers: [],
    }, {
      type: ActionType.LOAD_NEAR_OFFERS,
      payload: []
    })).toEqual({
      nearOffers: []
    });
  });

  it(`Reducer should update reviews`, () => {
    expect(processApp({
      reviews: [],
    }, {
      type: ActionType.LOAD_REVIEWS,
      payload: reviewsMock,
    })).toEqual({
      reviews: reviewsMock
    });
  });
});

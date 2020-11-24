import {ActionType} from "../../action";
import {SortOptions, CITIES} from "../../../const";
import {processApp} from "./process";
import {reviewsMock} from "../../../mocks/reviews";


const offersMock = [
  {
    id: 15,
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 52.38333,
        longitude: 4.9,
        zoom: 12
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 12
    },
    price: 180,
    title: `Wood and stone place`,
    type: `room`,
    rating: 3,
    description: `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
    goods: [`Wi-Fi`, `Heating`, `Kitchen`, `Parking`, `Flowers`, `Dishwasher`, `Towels`, `TV`],
    host: {
      name: `Max`,
    }
  },

  {
    id: 1,
    city: {
      name: `Paris`,
      location: {
        latitude: 48.864716,
        longitude: 2.349014,
        zoom: 12
      }
    },
    location: {
      latitude: 48.87456,
      longitude: 2.413,
      zoom: 12
    },
    price: 80,
    title: `Beautiful & luxurious apartment in Paris`,
    type: `Apartment`,
    rating: 4,
    description: `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
    goods: [`Wi-Fi`, `Heating`, `Kitchen`, `Parking`, `Flowers`, `Dishwasher`, `Towels`, `TV`],
    host: {
      name: `Maggy`,
    }
  },

  {
    id: 9,
    city: {
      name: `Cologne`,
      location: {
        latitude: 50.935173,
        longitude: 6.953101,
        zoom: 12
      }
    },
    location: {
      latitude: 50.9682,
      longitude: 6.874,
      zoom: 12
    },
    price: 220,
    title: `Beautiful & luxurious apartment in Cologne`,
    type: `Apartment`,
    rating: 1,
    description: `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
    goods: [`Wi-Fi`, `Heating`, `Kitchen`, `Parking`, `Flowers`, `Dishwasher`, `Towels`, `TV`],
    host: {
      name: `Bill`,
    }
  },
];


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
      payload: offersMock,
    })).toEqual({
      nearOffers: offersMock
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

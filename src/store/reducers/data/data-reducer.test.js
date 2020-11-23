import {loadData} from "./data-reducer";
import {ActionType} from "../../action";
import {createApi} from "../../../services/api";
import MockAdapter from "axios-mock-adapter";
import {fetchOffersList} from "../../api-actions";

const api = createApi(() => {});


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


describe(`Data Reducer testing`, () => {
  it(`Reducer without additional parameters returns initial state`, () => {
    expect(loadData(void 0, {})).toEqual({
      offers: []
    });
  });

  it(`Reducer updates offers by load offers`, () => {
    expect(loadData({
      offers: [],
    }, {
      type: ActionType.LOAD_OFFERS,
      payload: offersMock,
    })).toEqual({
      offers: offersMock,
    });
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /hotels`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = fetchOffersList();

    apiMock
      .onGet(`/hotels`)
      .reply(200, offersMock);

    return offersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: offersMock,
        });
      });
  });
});



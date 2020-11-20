import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import {OfferCard} from "./offer-card";

const mockStore = configureStore([]);

it(`Should OfferCard render properly`, () => {
  const offer = {
    id: 15,
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 52.38333,
        longitude: 4.9,
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
    },
    pictures: [`img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
    previewImage: `img/apartment-01.jpg`,
    isPremium: true,
    isFavorite: true,
    price: 180,
    title: `Wood and stone place`,
    type: `room`,
    rating: 3,
    description: `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
    bedroomsCount: 2,
    guestsLimit: 2,
    goods: [`Wi-Fi`, `Heating`, `Kitchen`, `Parking`, `Flowers`, `Dishwasher`, `Towels`, `TV`],
    host: {
      avatar: `img/avatar-max.jpg`,
      name: `Max`,
      isPro: false,
    },
  };

  const noop = () => {};
  const store = mockStore({});

  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <OfferCard
              offer={offer}
              id={offer.id}
              authorizationStatus={``}
              setActiveOfferIdAction={noop}
              resetActiveOfferIdAction={noop}
              changeFavoriteStatusAction={noop}/>
          </BrowserRouter>
        </Provider>
    )
        .toJSON();
  expect(tree).toMatchSnapshot();
});

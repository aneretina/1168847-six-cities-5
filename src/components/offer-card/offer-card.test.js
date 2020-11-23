import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {OfferCard} from "./offer-card";
import {offersMock} from "../../mocks/offers";

const mockStore = configureStore([]);

it(`Should OfferCard render properly`, () => {
  const noop = () => {};
  const store = mockStore({});
  const offer = offersMock[2];

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

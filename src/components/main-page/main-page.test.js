import React from "react";
import renderer from 'react-test-renderer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import rootReducer from "../../store/reducers/root/root-reducer";
import {MainPage} from "./main-page";
import {SortOptions, AuthorizationStatus} from "../../const";
import {offers} from "../../mocks/offers";

const store = createStore(rootReducer);

jest.mock(`../offer-map/offer-map`, () => `OfferMap`);

const noop = () => {};

describe(`MainPage render correctly`, () => {
  it(`MainPage`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <MainPage
                city={`Amsterdam`}
                currentCityOffers={offers}
                onChangeSort={noop}
                changeFavoriteStatusAction={noop}
                sort={SortOptions.POPULAR}
                authorizationStatus={AuthorizationStatus.NOT_AUTHORIZED}
                email={`max@gmail.com`}
              />
            </BrowserRouter>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

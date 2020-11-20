import React from "react";
import renderer from 'react-test-renderer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {Favorites} from "./favorites";
import rootReducer from "../../store/reducers/root/root-reducer";
import {offers} from "../../mocks/offers";

const store = createStore(rootReducer);

const noop = () => {};

describe(`Favorites render correctly`, () => {
  it(`Favorites empty`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <Favorites
                favoriteOffers={[]}
                onFavoriteButtonClick={noop}
                loadFavoriteOffersAction={noop}
                changeFavoriteStatus={noop}
              />
            </BrowserRouter>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Favorites not empty`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <Favorites
                favoriteOffers={offers}
                onFavoriteButtonClick={noop}
                loadFavoriteOffersAction={noop}
                changeFavoriteStatus={noop}
              />
            </BrowserRouter>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

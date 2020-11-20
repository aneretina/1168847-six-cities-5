import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import FavoriteButton from "./favorite-button";
import {FavoriteBtnType} from "../../const";

const mockStore = configureStore([]);

it(`Should FavoritesButton render properly`, () => {
  const noop = () => {};
  const store = mockStore({});

  const tree = renderer
    .create(
        <Provider store={store}>
          <FavoriteButton
            type={FavoriteBtnType.CARD}
            isFavorite={true}
            onClick={noop}
          />
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

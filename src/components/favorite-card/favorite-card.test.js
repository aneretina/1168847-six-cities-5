import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import FavoriteCard from "./favorite-card";
import {offersMock} from "../../mocks/offers";

it(`Should FavoriteCard render properly`, () => {

  const noop = () => {};

  const tree = renderer
    .create(
        <BrowserRouter>
          <FavoriteCard
            offer={offersMock[2]}
            onFavoriteButtonClick={noop}/>
        </BrowserRouter>
    )
        .toJSON();
  expect(tree).toMatchSnapshot();
});

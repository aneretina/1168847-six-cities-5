import React from "react";
import renderer from "react-test-renderer";
import {CitiesList} from "./cities-list";
import {CITIES} from "../../const";


it(`Should CitiesList render properly`, () => {
  const noop = () => {};
  const tree = renderer
    .create(
        <CitiesList
          currentCity={CITIES[4]}
          cities={CITIES}
          onCityClick={noop}/>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});


import React from "react";
import renderer from "react-test-renderer";
import MainEmpty from "./main-empty";


it(`Should Main epmty render properly`, () => {

  const tree = renderer
    .create(
        <MainEmpty
          city={`Amsterdam`}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

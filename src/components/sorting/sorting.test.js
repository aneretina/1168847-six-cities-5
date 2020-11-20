import React from "react";
import renderer from "react-test-renderer";
import {Sorting} from "./sorting";
import {SortOptions} from "../../const";

it(`Should Sorting render properly`, () => {

  const noop = () => {};
  const tree = renderer
    .create(
        <Sorting
          isOpened={true}
          onSortOpenClick={noop}
          currentSort={SortOptions.POPULAR}
          onChangeSort={noop}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

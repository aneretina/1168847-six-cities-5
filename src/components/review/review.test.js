import React from "react";
import renderer from "react-test-renderer";
import Review from "./review";
import {reviews} from "../../mocks/reviews";

it(`Should Review render properly`, () => {

  const tree = renderer
    .create(
        <Review
          review={reviews[1]}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

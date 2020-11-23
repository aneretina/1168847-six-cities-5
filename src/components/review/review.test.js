import React from "react";
import renderer from "react-test-renderer";
import Review from "./review";
import {reviewsMock} from "../../mocks/reviews";

it(`Should Review render properly`, () => {

  const tree = renderer
    .create(
        <Review
          review={reviewsMock[1]}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

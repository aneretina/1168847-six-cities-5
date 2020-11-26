import React from "react";
import renderer from "react-test-renderer";
import {reviewsMock} from "../../mocks/reviews";
import ReviewsList from "./reviews-list";

it(`Should OfferReviewsList render properly`, () => {

  const tree = renderer
    .create(
        <ReviewsList
          reviews={reviewsMock}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

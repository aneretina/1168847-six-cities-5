import React from "react";
import renderer from "react-test-renderer";
import {reviews} from "../../mocks/reviews";
import ReviewsList from "./reviews-list";

it(`Should OfferReviewsList render properly`, () => {

  const tree = renderer
    .create(
        <ReviewsList
          reviews={reviews}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

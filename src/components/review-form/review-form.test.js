import React from "react";
import renderer from "react-test-renderer";
import {ReviewForm} from "./review-form";


it(`Should ReviewForm render properly`, () => {

  const noop = () => {};

  const tree = renderer
    .create(
        <ReviewForm
          onReviewSubmit={noop}
          rating={`2`}
          review={`She carefully took a crumpled`}
          id={1}
          onRatingChange={noop}
          onTextChange={noop}
          resetState={noop}
          isDisabled={true}
          updateDisableFormStatus={noop}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

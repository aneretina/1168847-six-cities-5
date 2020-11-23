import React from 'react';
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {ReviewForm} from './review-form';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Review Form submits`, () => {
  const onSubmitAction = jest.fn(() => {
    return Promise.resolve(jest.fn());
  });

  const noop = () => {};

  const wrapper = shallow(
      <ReviewForm
        onReviewSubmit={onSubmitAction}
        rating={`2`}
        review={`She carefully took a crumpled`}
        id={1}
        onRatingChange={noop}
        onTextChange={noop}
        resetState={noop}
        isDisabled={true}
        updateDisableFormStatus={noop}
      />
  );

  wrapper.find(`.form`).simulate(`submit`, {preventDefault: () => {}});

  expect(onSubmitAction).toHaveBeenCalledTimes(1);
});

import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withReviewForm from "./with-review-form";


const noop = () => {};
const review = `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`;
const rating = `2`;

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const MockComponentWrapped = withReviewForm(MockComponent);

describe(`WithForm render`, () => {
  it(`withForm is rendered correctly`, () => {
    const tree = renderer.create((
      <MockComponentWrapped
        rating={rating}
        review={review}
        onRatingChange={noop}
        onTextChange={noop}
        resetState={noop}
        isDisabled={true}
        updateDisableFormStatus={noop}>
        <React.Fragment />
      </MockComponentWrapped>
    )).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

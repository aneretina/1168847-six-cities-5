import React from 'react';
import Enzyme, {shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import withReviewForm from './with-review-form';

Enzyme.configure({
  adapter: new Adapter(),
});


const MockComponent = () => <div />;
const MockComponentWrapped = withReviewForm(MockComponent);

describe(`withReviewForm HOC test`, () => {

  it(`test initial HOC state`, () => {
    const wrapper = shallow(<MockComponentWrapped />);

    expect(wrapper.state().rating).toEqual(``);
    expect(wrapper.state().review).toEqual(``);
    expect(wrapper.state().isDisabled).toEqual(false);
  });

  it(`when _updateDisableFormStatus works correctly`, () => {
    const wrapper = shallow(<MockComponentWrapped />);
    const instance = wrapper.instance();
    instance._updateDisableFormStatus(true);

    expect(wrapper.state().isDisabled).toEqual(true);
  });

  it(`test when text and rating is entered`, () => {
    const wrapper = shallow(<MockComponentWrapped />);
    const instance = wrapper.instance();

    const enteredReview = {
      target: {
        name: `review`,
        value: `some text`
      }
    };

    const enteredRating = {
      target: {
        name: `rating`,
        value: `1`
      }
    };

    instance._onRatingChange(enteredRating);
    instance._onTextChange(enteredReview);

    expect(wrapper.state().rating).toEqual(`1`);
    expect(wrapper.state().review).toEqual(`some text`);
  });

  it(`when reset the state to the initial state `, () => {
    const wrapper = shallow(<MockComponentWrapped />);
    const instance = wrapper.instance();
    instance.resetState();

    expect(wrapper.state().rating).toEqual(``);
    expect(wrapper.state().review).toEqual(``);
  });

});

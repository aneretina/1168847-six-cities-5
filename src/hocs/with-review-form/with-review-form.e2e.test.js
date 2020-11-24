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

  it(`test original HOC state`, () => {
    const wrapper = shallow(<MockComponentWrapped />);

    expect(wrapper.state().rating).toEqual(``);
    expect(wrapper.state().review).toEqual(``);
    expect(wrapper.state().isDisabled).toEqual(false);
  });

  it(`test when invoke _changeDisableFormAttribute`, () => {
    const wrapper = shallow(<MockComponentWrapped />);
    const instance = wrapper.instance();
    instance.updateDisableFormStatus(true);

    expect(wrapper.state().isDisabled).toEqual(true);
  });

  it(`test when invoke _handleInputChange`, () => {
    const wrapper = shallow(<MockComponentWrapped />);
    const instance = wrapper.instance();
    const enteredRating = {
      target: {
        name: `rating`,
        value: `1`
      }
    };
    const enteredReview = {
      target: {
        name: `review`,
        value: `some text`
      }
    };

    instance.onRatingChange(enteredRating);
    instance.onTextChange(enteredReview);

    expect(wrapper.state().rating).toEqual(`1`);
    expect(wrapper.state().review).toEqual(`some text`);
  });

  it(`test when invoke _resetState`, () => {
    const wrapper = shallow(<MockComponentWrapped />);
    const instance = wrapper.instance();
    instance.resetState();

    expect(wrapper.state().rating).toEqual(``);
    expect(wrapper.state().review).toEqual(``);
  });

});

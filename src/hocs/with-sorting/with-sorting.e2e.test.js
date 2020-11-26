import React from 'react';
import Enzyme, {shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import withSorting from './with-sorting';


Enzyme.configure({
  adapter: new Adapter(),
});


const MockComponent = () => <div />;

const MockComponentWrapped = withSorting(MockComponent);

describe(`withSorting HOC test`, () => {
  it(`test initial state`, () => {
    const wrapper = shallow(<MockComponentWrapped />);
    expect(wrapper.state().isOpened).toEqual(false);
  });

  it(`test _onSortOpenClick`, () => {
    const wrapper = shallow(<MockComponentWrapped />);
    const instance = wrapper.instance();
    instance._onSortOpenClick();

    expect(wrapper.state().isOpened).toEqual(true);
  });
});

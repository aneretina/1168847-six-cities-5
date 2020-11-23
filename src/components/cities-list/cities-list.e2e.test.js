import React from 'react';
import Enzyme, {shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import {CitiesList} from './cities-list';
import {CITIES} from '../../const';


Enzyme.configure({
  adapter: new Adapter(),
});

it(`Click on link should call a function`, () => {
  const onClick = jest.fn();

  const wrapper = shallow(
      <CitiesList
        currentCity={CITIES[4]}
        cities={CITIES}
        onCityClick={onClick}
      />
  );
  wrapper.find(`li`).at(1).simulate(`click`);

  expect(onClick).toHaveBeenCalledTimes(1);
});

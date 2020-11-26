import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Sorting} from "./sorting";
import {SortOptions} from "../../const";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Sorting works correct`, () => {
  it(`Should click on Sorting works correctly`, () => {
    const sortClick = jest.fn();
    const noop = () => {};

    const wrapper = mount(
        <Sorting
          isOpened={true}
          onSortOpenClick={sortClick}
          currentSort={SortOptions.PRICE_LOW_TO_HIGH}
          onChangeSort={noop}
        />
    );

    wrapper.find(`span`).at(1).simulate(`click`);
    expect(sortClick).toHaveBeenCalledTimes(1);
  });

  it(`Should update sorting options`, () => {
    const onChangeSort = jest.fn();
    const noop = () => {};

    const wrapper = mount(
        <Sorting
          isOpened={true}
          onSortOpenClick={noop}
          currentSort={SortOptions.TOP_RATED_FIRST}
          onChangeSort={onChangeSort}
        />
    );

    wrapper.find(`li`).at(1).simulate(`click`);
    expect(onChangeSort).toHaveBeenCalledTimes(1);
  });
});


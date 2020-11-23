import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Sorting} from "./sorting";
import {SortOptions} from "../../const";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Sorting works correct`, () => {
  it(`Should be sorting update`, () => {
    const sortClick = jest.fn();
    const noop = () => {};

    const wrapper = mount(
        <Sorting
          isOpened={true}
          onSortOpenClick={sortClick}
          currentSort={SortOptions.POPULAR}
          onChangeSort={noop}
        />
    );

    wrapper.find(`span`).at(1).simulate(`click`);
    expect(sortClick).toHaveBeenCalledTimes(1);
  });
});


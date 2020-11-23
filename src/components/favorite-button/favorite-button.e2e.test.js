
import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {FavoriteBtnType} from "../../const";
import FavoriteButton from "./favorite-button";


Enzyme.configure({
  adapter: new Adapter(),
});


it(`When FavoriteButton is clicked, it works correctly `, () => {
  const onButtonClick = jest.fn();

  const wrapper = shallow(
      <FavoriteButton
        type={FavoriteBtnType.CARD}
        isFavorite={true}
        onClick={onButtonClick}
      />
  );

  const favoriteButton = wrapper.find(`button`);

  favoriteButton.simulate(`click`, {preventDefault() {}});

  expect(onButtonClick).toHaveBeenCalledTimes(1);
});


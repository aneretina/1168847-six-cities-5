import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {OfferCard} from "./offer-card";
import {offersMock} from "../../mocks/offers";


Enzyme.configure({
  adapter: new Adapter(),
});

const noop = () => {};

const offer = offersMock[1];

describe(`OfferCard works correct`, () => {
  it(`Entering a mouse from a card should call a function`, () => {
    const changeActiveId = jest.fn();

    const wrapper = shallow(
        <OfferCard
          offer={offer}
          id={offer.id}
          authorizationStatus={``}
          setActiveOfferIdAction={changeActiveId}
          resetActiveOfferIdAction={changeActiveId}
          changeFavoriteStatusAction={noop}
        />
    );

    wrapper.find(`article`).at(0).simulate(`mouseEnter`);
    wrapper.find(`article`).at(0).simulate(`mouseLeave`);

    expect(changeActiveId).toHaveBeenCalledTimes(2);
  });

});

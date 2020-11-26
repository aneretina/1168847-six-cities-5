import React from "react";
import renderer from 'react-test-renderer';
import {OfferMap} from "./offer-map";
import {offersMock} from "../../mocks/offers";


it(`Map render correctly`, () => {
  const tree = renderer
    .create(
        <OfferMap
          offers={offersMock}
          className={`cities__map`}
          offerId={1}
          cityCoords={[52.43212, 2.657]}
          zoom={12}
          mainOffer={offersMock[1]}
        />,
        {createNodeMock: () => {
          return document.createElement(`div`);
        }}
    ).toJSON();

  expect(tree).toMatchSnapshot();
});

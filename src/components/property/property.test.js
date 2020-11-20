import React from 'react';
import renderer from 'react-test-renderer';
import {offers} from '../../mocks/offers';
import {AuthorizationStatus} from '../../const';
import {reviews} from '../../mocks/reviews';
import {Property} from './property';


const noop = () => {};
jest.mock(`../offer-map/offer-map`, () => `OfferMap`);
// jest.mock(`../offers-list/offers-list`, () => `OffersList`);
// jest.mock(`../review-form/review-form`, () => `ReviewForm`);
// jest.mock(`../header/header`, () => `Header`);
// jest.mock(`../reviews-list/reviews-list`, () => `ReviewsList`);
// jest.mock(`../favorite-button/favorite-button`, () => `FavoriteButton`);


it(`Should Property render properly`, () => {

  const tree = renderer
      .create(<Property
        nearOffers={offers}
        loadNearOffersAction={noop}
        loadReviewsAction={noop}
        activeCity={`Paris`}
        id={1}
        offers={offers}
        authorizationStatus={AuthorizationStatus.AUTHORIZED}
        changeFavoriteStatusAction={noop}
        reviews={reviews}
      />)
      .toJSON();

  expect(tree).toMatchSnapshot();
});

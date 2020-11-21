import React from 'react';
import renderer from 'react-test-renderer';
import {offers} from '../../mocks/offers';
import {AuthorizationStatus} from '../../const';
import {reviews} from '../../mocks/reviews';
import {Property} from './property';
import {BrowserRouter} from 'react-router-dom';
import {createStore} from 'redux';
import rootReducer from '../../store/reducers/root/root-reducer';
import {Provider} from 'react-redux';

jest.mock(`../offer-map/offer-map`, () => `OfferMap`);

const store = createStore(rootReducer);

it(`Should Property render properly`, () => {
  const noop = () => {};
  const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <Property
                nearOffers={offers}
                loadNearOffersAction={noop}
                loadReviewsAction={noop}
                activeCity={`Paris`}
                id={1}
                offers={offers}
                authorizationStatus={AuthorizationStatus.AUTHORIZED}
                changeFavoriteStatusAction={noop}
                reviews={reviews}
              />
            </BrowserRouter>
          </Provider>)
      .toJSON();

  expect(tree).toMatchSnapshot();
});

import React from 'react';
import renderer from 'react-test-renderer';
import {AuthorizationStatus} from '../../const';
import {reviewsMock} from '../../mocks/reviews';
import {Property} from './property';
import {BrowserRouter} from 'react-router-dom';
import {createStore} from 'redux';
import rootReducer from '../../store/reducers/root/root-reducer';
import {Provider} from 'react-redux';
import {offersMock} from '../../mocks/offers';

jest.mock(`../offer-map/offer-map`, () => `OfferMap`);

const store = createStore(rootReducer);

it(`Should Property render properly`, () => {
  const noop = () => {};
  const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <Property
                nearOffers={offersMock}
                loadNearOffersAction={noop}
                loadReviewsAction={noop}
                activeCity={`Paris`}
                id={1}
                offers={offersMock}
                authorizationStatus={AuthorizationStatus.AUTHORIZED}
                changeFavoriteStatusAction={noop}
                reviews={reviewsMock}
              />
            </BrowserRouter>
          </Provider>)
      .toJSON();

  expect(tree).toMatchSnapshot();
});

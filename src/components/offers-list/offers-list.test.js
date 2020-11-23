import React from "react";
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import OffersList from "./offers-list";
import rootReducer from "../../store/reducers/root/root-reducer";
import {AuthorizationStatus} from "../../const";
import {offersMock} from "../../mocks/offers";


const store = createStore(rootReducer);
const noop = () => {};

it(`OfferList render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <OffersList
              offers={offersMock}
              className={`cities__places-list tabs__content`}
              authorizationStatus={AuthorizationStatus.NOT_AUTHORIZED}
              changeFavoriteStatusAction={noop}
            />
          </BrowserRouter>
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});

import React from "react";
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from "../../store/reducers/root/root-reducer";
import {Login} from "./login";

const store = createStore(rootReducer);

describe(`Login render correctly`, () => {
  it(`Login when user no auth`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <Login
                onSubmit={() => {}}
              />
            </BrowserRouter>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import App from "./app";
import browserHistory from "../../browser-history";

jest.mock(`../private-route/private-route`, () => `PrivateRoute`);
jest.mock(`../main-page/main-page`, () => `MainPage`);
jest.mock(`../login/login`, () => `Login`);
jest.mock(`../favorites/favorites`, () => `Favorites`);
jest.mock(`../property/property`, () => `Property`);

it(`App render`, () => {
  const tree = renderer
     .create(
         <BrowserRouter history={browserHistory}>
           <App/>
         </BrowserRouter>
     )

    .toJSON();

  expect(tree).toMatchSnapshot();
});

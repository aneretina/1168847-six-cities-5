import React from "react";
import renderer from "react-test-renderer";
import App from "./app";


jest.mock(`../private-route/private-route`, () => `PrivateRoute`);
jest.mock(`../main-page/main-page`, () => `MainPage`);
jest.mock(`../login/login`, () => `Login`);
jest.mock(`../favorites/favorites`, () => `Favorites`);
jest.mock(`../property/property`, () => `Property`);

it(`App render`, () => {
  const tree = renderer
     .create(
         <App/>
     )

    .toJSON();

  expect(tree).toMatchSnapshot();
});

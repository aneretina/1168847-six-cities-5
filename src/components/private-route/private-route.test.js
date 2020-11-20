import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import {PrivateRoute} from "./private-route";

describe(`PrivateRoute render`, () => {
  it(`PrivateRoute with authorization`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <PrivateRoute
              path={`/favorites`}
              exact={true}
              authorizationStatus={`AUTH`}
              onFavoriteButtonClick={() => {}}
              render={() => {}}>
            </PrivateRoute>
          </BrowserRouter>
      )

    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`PrivateRoute without authorization`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <PrivateRoute
              path={`/login`}
              exact={true}
              authorizationStatus={`NO_AUTH`}
              onFavoriteButtonClick={() => {}}
              render={() => {}}>
            </PrivateRoute>
          </BrowserRouter>
      )

    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

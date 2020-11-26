import React from 'react';
import {Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import Footer from './footer';
import browserHistory from '../../browser-history';


it(`Should Footer render correctly`, () => {
  const tree = renderer
    .create(
        <Router history={browserHistory}>
          <Footer />
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});


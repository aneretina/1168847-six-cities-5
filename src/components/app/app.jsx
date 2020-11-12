import React, {Fragment} from "react";
import {Switch, Route, Router as BrowserRouter, Link} from "react-router-dom";
import browserHistory from '../../browser-history';
import PropTypes from "prop-types";
import MainPage from "../main-page/main-page";
import Login from "../login/login";
import Favorites from "../favorites/favorites";
import Property from "../property/property";


const App = () => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/login"
          render={() => <Login />}
        />
        <Route exact path="/favorites">
          <Favorites />
        </Route>
        <Route exact path='/offer/:id'
          render={({match}) => (
            <Property
              id={match.params.id}
            />
          )}
        />
        <Route>
          <Fragment>
            <h1 style={{display: `block`, textAlign: `center`}}>Page not found</h1>
            <Link to="/" style={{display: `block`, textAlign: `center`, marginTop: `30px`}}>Go to home</Link>
          </Fragment>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

import React, {Fragment} from "react";
import {Switch, Route, BrowserRouter, Link} from "react-router-dom";
import MainPage from "../main-page/main-page";
import PropTypes from "prop-types";
import Login from "../login/login";
import Favorites from "../favorites/favorites";
import Property from "../property/property";

const App = (props) => {
  const {offers} = props;


  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage offers={offers} />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
        <Route exact path="/offer/:id">
          <Property offer={offers[0]} />
        </Route>
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

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    price: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
    bedroomsCount: PropTypes.number.isRequired,
    guestsLimit: PropTypes.number.isRequired,
    features: PropTypes.array.isRequired,
    avatar: PropTypes.array.isRequired,
    host: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }))
};

export default App;

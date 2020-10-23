import React, {Fragment} from "react";
import {Switch, Route, BrowserRouter, Link} from "react-router-dom";
import PropTypes from "prop-types";
import MainPage from "../main-page/main-page";
import Login from "../login/login";
import Favorites from "../favorites/favorites";
import Property from "../property/property";

const App = (props) => {
  const {offers, reviews} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
        <Route exact path='/offer/:id'
          render={({match}) => (
            <Property
              id={match.params.id}
              offers={offers}
              reviews={reviews}
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

App.propTypes = {
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
  })).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.array.isRequired,
    rating: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  })).isRequired
};

export default App;

import React from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import OffersList from "../offers-list/offers-list";
import OfferMap from "../offer-map/offer-map";
import CitiesList from "../cities-list/cities-list";

const MainPage = (props) => {
  const {city, currentCityOffers} = props;

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/></a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <CitiesList/>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found"> {currentCityOffers.length} places to stay in {city}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                   Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex="0">Popular</li>
                  <li className="places__option" tabIndex="0">Price: low to high</li>
                  <li className="places__option" tabIndex="0">Price: high to low</li>
                  <li className="places__option" tabIndex="0">Top rated first</li>
                </ul>
              </form>
              <OffersList offers={currentCityOffers} />
            </section>
            <div className="cities__right-section">
              <OfferMap offers={currentCityOffers} className={`cities__map`} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

MainPage.propTypes = {
  city: PropTypes.string.isRequired,
  currentCityOffers: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  city: state.city,
  currentCityOffers: state.currentCityOffers,
});

export {MainPage};
export default connect(mapStateToProps)(MainPage);

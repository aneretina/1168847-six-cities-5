import React from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {changeSortOptions} from "../../store/action";
import OffersList from "../offers-list/offers-list";
import OfferMap from "../offer-map/offer-map";
import CitiesList from "../cities-list/cities-list";
import Sorting from "../sorting/sorting";
import MainEmpty from "../main-empty/main-empty";
import {getCurrentCity, getCurrentCityOffers, getCurrentSort} from "../../store/selectors/selectors";
import {getSortedOffersByType} from "../../utils";


const MainPage = (props) => {
  const {city, currentCityOffers, sort, onChangeSort} = props;

  const sortedOffers = getSortedOffersByType(currentCityOffers, sort);

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

      <main className={`page__main page__main--index${!currentCityOffers.length ? ` page__main--index-empty` : ``}`}>
        <CitiesList/>
        <div className="cities">
          <div className={`cities__places-container${!currentCityOffers.length ? ` cities__places-container--empty` : ``} container`}>
            {currentCityOffers.length ?
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found"> {currentCityOffers.length} places to stay in {city}</b>
                <Sorting
                  currentSort={sort}
                  onChangeSort={onChangeSort}/>
                <OffersList offers={sortedOffers}/>
              </section>
              : <MainEmpty city={city} />
            }
            <div className="cities__right-section">
              <OfferMap className={`cities__map`} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

MainPage.propTypes = {
  city: PropTypes.string.isRequired,
  currentCityOffers: PropTypes.array.isRequired,
  sort: PropTypes.string.isRequired,
  onChangeSort: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  city: getCurrentCity(state),
  currentCityOffers: getCurrentCityOffers(state),
  sort: getCurrentSort(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChangeSort(currentSort) {
    dispatch(changeSortOptions(currentSort));
  },
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

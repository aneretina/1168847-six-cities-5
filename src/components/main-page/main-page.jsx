import React from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {changeSortOptions} from "../../store/action";
import OffersList from "../offers-list/offers-list";
import OfferMap from "../offer-map/offer-map";
import CitiesList from "../cities-list/cities-list";
import Sorting from "../sorting/sorting";
import MainEmpty from "../main-empty/main-empty";
import {getCurrentCity, getCurrentCityOffers, getCurrentSort, getAuthorizationStatus, getEmail} from "../../store/selectors/selectors";
import {getSortedOffersByType} from "../../utils";
import Header from "../ header/header";
import {changeFavoriteStatus} from "../../store/api-actions";


const MainPage = (props) => {
  const {city, currentCityOffers, sort, onChangeSort, changeFavoriteStatusAction, authorizationStatus, email} = props;

  const sortedOffers = getSortedOffersByType(currentCityOffers, sort);

  return (
    <div className="page page--gray page--main">
      <Header email={email} />
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
                <OffersList
                  offers={sortedOffers}
                  className={`cities__places-list tabs__content`}authorizationStatus={authorizationStatus}
                  changeFavoriteStatusAction={changeFavoriteStatusAction}
                />
              </section>
              : <MainEmpty city={city} />
            }
            <div className="cities__right-section">
              <OfferMap
                cityCoords={[currentCityOffers[0].city.location.latitude, currentCityOffers[0].city.location.longitude]}
                zoom={currentCityOffers[0].city.location.zoom}
                className={`cities__map`} />
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
  authorizationStatus: PropTypes.string.isRequired,
  changeFavoriteStatusAction: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  city: getCurrentCity(state),
  currentCityOffers: getCurrentCityOffers(state),
  sort: getCurrentSort(state),
  authorizationStatus: getAuthorizationStatus(state),
  email: getEmail(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChangeSort(currentSort) {
    dispatch(changeSortOptions(currentSort));
  },
  changeFavoriteStatusAction(id, num) {
    dispatch(changeFavoriteStatus(id, num));
  }
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

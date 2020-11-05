import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {changeCity, getOffersList} from "../../store/action";
import {getCitiesList, getCurrentCity} from "../../store/selectors/selectors";

const CitiesList = (props) => {
  const {cities, onCityClick, currentCity, getOffersListAction} = props;
  return (
    <Fragment>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {cities.map((item, index) => (
              <li key={`city-${index}`}
                className="locations__item"
                onClick={(evt) => {
                  evt.preventDefault();
                  onCityClick(item);
                  getOffersListAction();
                }}>
                <a
                  className={`locations__item-link tabs__item 
                  ${item === currentCity ? `tabs__item--active` : ``}`}
                  href="#"
                >
                  <span>{item}</span>
                </a>
              </li>)
            )}
          </ul>
        </section>
      </div>
    </Fragment>
  );
};

CitiesList.propTypes = {
  cities: PropTypes.array.isRequired,
  onCityClick: PropTypes.func.isRequired,
  currentCity: PropTypes.string.isRequired,
  getOffersListAction: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  cities: getCitiesList(state),
  currentCity: getCurrentCity(state)
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick: (city) => dispatch(changeCity(city)),
  getOffersListAction() {
    dispatch(getOffersList());
  }
});

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);


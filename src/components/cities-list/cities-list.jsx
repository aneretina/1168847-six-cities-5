import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

const CitiesList = (props) => {
  const {cities, onCityClick, currentCity, getOffersList} = props;
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
                  getOffersList();
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
  getOffersList: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  cities: state.cities,
  currentCity: state.city
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick: (city) => dispatch(ActionCreator.changeCity(city)),
  getOffersList() {
    dispatch(ActionCreator.getOffersList());
  }
});

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);


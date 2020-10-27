import React from 'react';
import PropTypes from "prop-types";
import OfferCard from '../offer-card/offer-card';

const OffersList = (props)=> {
  const {offers} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          id={offer.id}
        />))}
    </div>
  );
};

OffersList.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default OffersList;

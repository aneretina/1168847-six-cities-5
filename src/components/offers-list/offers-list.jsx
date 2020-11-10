import React from 'react';
import PropTypes from "prop-types";
import OfferCard from '../offer-card/offer-card';

const OffersList = (props)=> {
  const {offers, className} = props;

  return (
    <div className={`places__list ${className}`}>
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
  className: PropTypes.string.isRequired
};

export default OffersList;

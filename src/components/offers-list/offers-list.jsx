import React from 'react';
import PropTypes from "prop-types";
import OfferCard from '../offer-card/offer-card';

const OffersList = (props)=> {
  const {offers, className, authorizationStatus, changeFavoriteStatusAction} = props;

  return (
    <div className={`places__list ${className}`}>
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          id={offer.id}
          authorizationStatus={authorizationStatus}
          changeFavoriteStatusAction={changeFavoriteStatusAction}
        />))}
    </div>
  );
};

OffersList.propTypes = {
  offers: PropTypes.array.isRequired,
  className: PropTypes.string.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  changeFavoriteStatusAction: PropTypes.func.isRequired,
};

export default OffersList;

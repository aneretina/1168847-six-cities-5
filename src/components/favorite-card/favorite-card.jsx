import React from 'react';
import PropTypes from 'prop-types';
import offerProp from '../offer-card/offer.prop';
import {TO_PERCENT, FavoriteBtnType} from '../../const';
import FavoriteButton from '../favorite-button/favorite-button';


const FavoriteCard = (props) => {
  const {offer, onFavoriteButtonClick} = props;
  return (
    <article className="favorites__card place-card" id={offer.id}>
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={offer.previewImage} width="150" height="110" alt="Place image"/>
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro; {offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <FavoriteButton
            type={FavoriteBtnType.CARD}
            isFavorite={offer.isFavorite}
            onClick={onFavoriteButtonClick}
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: offer.rating * TO_PERCENT + `%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{offer.title}</a>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
};


FavoriteCard.propTypes = {
  offer: offerProp,
  onFavoriteButtonClick: PropTypes.func.isRequired,
};

export default FavoriteCard;


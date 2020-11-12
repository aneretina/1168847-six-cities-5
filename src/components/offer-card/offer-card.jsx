import React from 'react';
import {setActiveOfferId, resetActiveOfferId} from "../../store/action";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {getActiveOfferId} from '../../store/selectors/selectors';
import offerProp from './offer.prop';
import {TO_PERCENT, AuthorizationStatus} from '../../const';

const OfferCard = (props) => {
  const {offer, id, setActiveOfferIdAction, resetActiveOfferIdAction, changeFavoriteStatusAction, authorizationStatus} = props;
  const offerLink = `offer/` + id;

  const onFavoriteButtonClick = () => {
    if (authorizationStatus === AuthorizationStatus.NOT_AUTHORIZED) {
      history.push(`/login`);
    }

    changeFavoriteStatusAction(offer.id, !offer.isFavorite ? 1 : 0);
  };

  return (
    <article
      className="cities__place-card place-card"
      id={offer.id}
      onMouseEnter={setActiveOfferIdAction}
      onMouseLeave={resetActiveOfferIdAction}
    >
      <div className="place-card__mark">
        {offer.isPremium ?
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
          : ``}
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={offerLink}>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button onClick={onFavoriteButtonClick} className={`place-card__bookmark-button button ${offer.isFavorite ? `place-card__bookmark-button--active` : ``}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: offer.rating * TO_PERCENT + `%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={offerLink}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  id: PropTypes.number.isRequired,
  setActiveOfferIdAction: PropTypes.func.isRequired,
  resetActiveOfferIdAction: PropTypes.func.isRequired,
  offer: offerProp,
  authorizationStatus: PropTypes.string.isRequired,
  changeFavoriteStatusAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeOfferId: getActiveOfferId(state),
});


const mapDispatchToProps = (dispatch, props) => ({
  setActiveOfferIdAction() {
    dispatch(setActiveOfferId(props.id));
  },
  resetActiveOfferIdAction() {
    dispatch(resetActiveOfferId());
  }
});

export {OfferCard};
export default connect(mapStateToProps, mapDispatchToProps)(OfferCard);

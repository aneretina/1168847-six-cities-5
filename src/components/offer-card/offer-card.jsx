import React from 'react';
import {ActionCreator} from "../../store/action";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const OfferCard = (props) => {
  const {offer, id, setActiveOfferId, resetActiveOfferId} = props;
  const offerLink = `offer/` + id;

  return (
    <article
      key={`${id}-${offer.name}`}
      className="cities__place-card place-card"
      onMouseEnter={() => {
        setActiveOfferId(id);
      }}

      onMouseLeave={() => {
        resetActiveOfferId(id);
      }}
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
          <img className="place-card__image" src={offer.images[0]} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `80%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={offerLink}>{offer.name}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  id: PropTypes.number.isRequired,
  setActiveOfferId: PropTypes.func.isRequired,
  resetActiveOfferId: PropTypes.func.isRequired,
  offer: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    price: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
  }).isRequired
};

const mapStateToProps = (state) => ({
  activeOfferId: state.activeOfferId,
});


const mapDispatchToProps = (dispatch) => ({
  setActiveOfferId(id) {
    dispatch(ActionCreator.setActiveOfferId(id));
  },
  resetActiveOfferId() {
    dispatch(ActionCreator.resetActiveOfferId());
  }
});

export {OfferCard};
export default connect(mapStateToProps, mapDispatchToProps)(OfferCard);

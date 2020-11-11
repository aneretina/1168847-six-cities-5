import React, {PureComponent} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
// import Moment from 'react-moment';
import OfferMap from "../offer-map/offer-map";
import OffersList from "../offers-list/offers-list";
import NewCommentForm from "../new-comment-form/new-comment-form";
import {getCurrentCityOffers, getCurrentCity, getAuthorizationStatus, getNearOffers} from "../../store/selectors/selectors";
import Header from "../ header/header";
import {TO_PERCENT} from "../../const";
import {changeFavoriteStatus, fetchNearOffersList} from "../../store/api-actions";


class Property extends PureComponent {
  constructor(props) {
    super(props);
  }

  componenDidMount() {
    this.props.loadNearOffersAction(this.props.id);
  }


  render() {
    const {offers, reviews, id, activeCity, authorizationStatus, changeFavoriteStatusAction, nearOffers} = this.props;
    console.log(id)
    const offer = offers.find((offerCurrent) => offerCurrent.id === +id);


    const picturesForShow = offer.pictures.slice(0, 6);

    const onFavoriteButtonClick = () => {
      changeFavoriteStatusAction(offer.id, !offer.isFavorite ? 1 : 0);
    };

    return (
      <div className="page">
        <Header />
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {picturesForShow.map((img, i) => (
                  <div key={i} className="property__image-wrapper">
                    <img className="property__image" src={img} alt={offer.title}/>
                  </div>
                ))}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                <div className="property__mark">
                  {offer.isPremium ?
                    <div className="place-card__mark">
                      <span>Premium</span>
                    </div>
                    : ``}
                </div>
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {offer.title}
                  </h1>
                  <button onClick={onFavoriteButtonClick} className={`property__bookmark-button button ${offer.isFavorite ? `property__bookmark-button--active` : ``}`} type="button">
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: offer.rating * TO_PERCENT + `%`}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{offer.rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {offer.type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {offer.bedroomsCount} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    {offer.guestsLimit} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{offer.price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {offer.goods.map((feature, index) => {
                      return (
                        <li key={index} className="property__inside-item">
                          {feature}
                        </li>);
                    })}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className={`property__avatar-wrapper ${offer.host.isPro ? `property__avatar-wrapper--pro` : ``} user__avatar-wrapper`}>
                      <img className="property__avatar user__avatar" src={offer.host.avatar} width="74" height="74" alt="Host avatar"/>
                    </div>
                    <span className="property__user-name">
                      {offer.host.name}
                    </span>
                  </div>
                  <div className="property__description">
                    {offer.description}
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                  <NewCommentForm />
                </section>
              </div>
            </div>
            <OfferMap offers={nearOffers}
              activeCity={activeCity}
              //cityCoords={[nearOffers[0].city.location.latitude, nearOffers[0].city.location.longitude]}
              //zoom={nearOffers[0].city.location.zoom}
              className={`property__map`} />
          </section>
          <div className="container">
            <section className="near-places places">
              {nearOffers.length > 0 &&
              <>
                <h2 className="near-places__title">Other places in the neighbourhood</h2>

                <OffersList offers={nearOffers}
                  authorizationStatus={authorizationStatus}
                  changeFavoriteStatusAction={changeFavoriteStatusAction}
                  className={`near-places__list`} />
              </>
              }
            </section>

          </div>
        </main>
      </div>
    );
  }
}

Property.propTypes = {
  nearOffers: PropTypes.array.isRequired,
  loadNearOffersAction: PropTypes.func.isRequired,
  activeCity: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  changeFavoriteStatusAction: PropTypes.func.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.array.isRequired,
    rating: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  })).isRequired
};

const mapStateToProps = (state) => ({
  offers: getCurrentCityOffers(state),
  activeCity: getCurrentCity(state),
  authorizationStatus: getAuthorizationStatus(state),
  nearOffers: getNearOffers(state),
});

const mapDispatchToProps = ((dispatch) => ({
  changeFavoriteStatusAction(id, num) {
    dispatch(changeFavoriteStatus(id, num));
  },

  loadNearOffersAction(id) {
    dispatch(fetchNearOffersList(id));
  },
}));

export {Property};
export default connect(mapStateToProps, mapDispatchToProps)(Property);


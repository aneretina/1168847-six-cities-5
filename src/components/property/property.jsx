import React, {PureComponent} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import OfferMap from "../offer-map/offer-map";
import OffersList from "../offers-list/offers-list";
import ReviewForm from "../review-form/review-form";
import {getCurrentCityOffers, getCurrentCity, getAuthorizationStatus, getNearOffers, getReviews} from "../../store/selectors/selectors";
import Header from "../ header/header";
import {TO_PERCENT, FavoriteBtnType, AuthorizationStatus} from "../../const";
import {changeFavoriteStatus, fetchNearOffersList, fetchReviewsList} from "../../store/api-actions";
import offerProp from "../offer-card/offer.prop";
import ReviewsList from "../reviews-list/reviews-list";
import reviewProp from "../review/review.prop";
import FavoriteButton from "../favorite-button/favorite-button";
import browserHistory from "../../browser-history";


class Property extends PureComponent {
  componentDidMount() {
    this.props.loadNearOffersAction(this.props.id);
    this.props.loadReviewsAction(this.props.id);
  }

  render() {
    const {offers, reviews, id, activeCity, authorizationStatus, changeFavoriteStatusAction, nearOffers} = this.props;
    const offer = offers.find((offerCurrent) => offerCurrent.id === Number(id));

    const picturesForShow = offer.pictures.slice(0, 6);

    const onFavoriteButtonClick = () => {
      if (this.props.authorizationStatus === AuthorizationStatus.NOT_AUTHORIZED) {
        browserHistory.push(`/login`);
      }

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
                  <FavoriteButton
                    type={FavoriteBtnType.PROPERTY}
                    isFavorite={offer.isFavorite}
                    onFavoriteButtonClick={onFavoriteButtonClick}
                  />
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
                  <ReviewsList reviews={reviews} />
                  {authorizationStatus === AuthorizationStatus.AUTHORIZED &&
                  <ReviewForm id={id} />
                  }
                </section>
              </div>
            </div>
            {nearOffers.length > 0 &&
            <OfferMap offers={nearOffers}
              activeCity={activeCity}
              cityCoords={[nearOffers[0].city.location.latitude, nearOffers[0].city.location.longitude]}
              zoom={nearOffers[0].city.location.zoom}
              mainOffer={offer}
              className={`property__map`} />
            }
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
  loadReviewsAction: PropTypes.func.isRequired,
  activeCity: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(offerProp),
  authorizationStatus: PropTypes.string.isRequired,
  changeFavoriteStatusAction: PropTypes.func.isRequired,
  reviews: PropTypes.arrayOf(reviewProp),
};

const mapStateToProps = (state) => ({
  offers: getCurrentCityOffers(state),
  activeCity: getCurrentCity(state),
  authorizationStatus: getAuthorizationStatus(state),
  nearOffers: getNearOffers(state),
  reviews: getReviews(state),
});

const mapDispatchToProps = ((dispatch) => ({
  changeFavoriteStatusAction(id, num) {
    dispatch(changeFavoriteStatus(id, num));
  },

  loadNearOffersAction(id) {
    dispatch(fetchNearOffersList(id));
  },

  loadReviewsAction(id) {
    dispatch(fetchReviewsList(id));
  },
}));

export {Property};
export default connect(mapStateToProps, mapDispatchToProps)(Property);


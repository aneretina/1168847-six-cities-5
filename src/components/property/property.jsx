import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Moment from 'react-moment';
import {Link} from 'react-router-dom';
import OfferMap from "../offer-map/offer-map";
import OffersList from "../offers-list/offers-list";
import NewCommentForm from "../new-comment-form/new-comment-form";


const Property = (props) => {
  const {offers, reviews, id, activeCity} = props;
  const nearOffers = offers.slice(0, 3);

  const offer = offers.find((offerCurrent) => offerCurrent.id === Number(id) && offerCurrent.city === activeCity);

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {offer.images.map((img, i) => (
                <div key={i} className="property__image-wrapper">
                  <img className="property__image" src={img} alt={offer.name}/>
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
                  {offer.name}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `80%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer.bedroomsCount}
                </li>
                <li className="property__feature property__feature--adults">
                  {offer.guestsLimit}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {offer.features.map((feature, index) => {
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
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {offer.host}
                  </span>
                </div>
                <div className="property__description">
                  {offer.description}
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ul className="reviews__list">
                  {reviews.map((review, i) => (
                    <li key={i} className="reviews__item">
                      <div className="reviews__user user">
                        <div className="reviews__avatar-wrapper user__avatar-wrapper">
                          <img className="reviews__avatar user__avatar" src="img/avatar-max.jpg" width="54" height="54" alt="Reviews avatar"/>
                        </div>
                        <span className="reviews__user-name">
                          {review.name}
                        </span>
                      </div>
                      <div className="reviews__info">
                        <div className="reviews__rating rating">
                          <div className="reviews__stars rating__stars">
                            <span style={{width: `80%`}}></span>
                            <span className="visually-hidden">Rating</span>
                          </div>
                        </div>
                        <p className="reviews__text">
                          {review.text}
                        </p>
                        <Moment className="reviews__time" date={review.date} format="MMMM/DD">
                          {review.date}
                        </Moment>
                      </div>
                    </li>
                  ))}
                </ul>
                <NewCommentForm />
              </section>
            </div>
          </div>
          <OfferMap offers={nearOffers}
            activeCity={activeCity}
            className={`property__map`} />
        </section>
        <div className="container">
          <OffersList offers={nearOffers} />
        </div>
      </main>
    </div>
  );
};

Property.propTypes = {
  activeCity: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.array.isRequired,
    rating: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  })).isRequired
};

const mapStateToProps = (PROCESS) => ({
  offers: PROCESS.currentCityOffers,
  activeCity: PROCESS.city,
});

export {Property};
export default connect(mapStateToProps)(Property);


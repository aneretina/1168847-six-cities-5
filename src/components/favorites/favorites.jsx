import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {getOffersFavorite} from "../../store/selectors/selectors";
import Header from "../ header/header";
import {getFavoriteOffers, changeFavoriteStatus} from "../../store/api-actions";
import {CITIES, TO_PERCENT} from "../../const";


class Favorites extends PureComponent {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    const {loadFavoriteOffersAction} = this.props;

    loadFavoriteOffersAction();
  }

  render() {
    const {favoriteOffers, changeFavoriteStatusAction} = this.props;
    const onFavoriteButtonClick = (evt) => {
      const offer = evt.target.closest(`.place-card`);
      if (!offer) {
        return;
      }

      changeFavoriteStatusAction(offer.id, 0);
    };

    const isEmpty = !favoriteOffers.length;

    return (
      <div className={`page ${isEmpty ? `page--favorites-empty` : ``}`}>
        <Header />
        <main className={`page__main page__main--favorites ${isEmpty ? `page__main--favorites-empty` : ``}`}>
          <div className="page__favorites-container container">
            <section className={`favorites ${isEmpty ? `favorites--empty` : ``}`}>
              {isEmpty ?
                <React.Fragment>
                  <h1 className="visually-hidden">Favorites (empty)</h1>
                  <div className="favorites__status-wrapper">
                    <b className="favorites__status">Nothing yet saved.</b>
                    <p className="favorites__status-description">Save properties to narrow down search or plan yor future trips.</p>
                  </div>
                </React.Fragment>
                :
                <React.Fragment>
                  <h1 className="favorites__title">Saved listing</h1>
                  {CITIES.map((city, index) => {
                    const filteredOffers = favoriteOffers.slice().filter((offer) => offer.city.name === city);
                    if (filteredOffers.length > 0) {
                      return (
                        <ul key={`${city}-${index}`} className="favorites__list">
                          <li className="favorites__locations-items">
                            <div className="favorites__locations locations locations--current">
                              <div className="locations__item">
                                <a className="locations__item-link" href="#">
                                  <span>{city}</span>
                                </a>
                              </div>
                            </div>
                            <div className="favorites__places">
                              {filteredOffers.map((offer) => (
                                <article key={`${offer.type}-${offer.id}`} className="favorites__card place-card" id={offer.id}>
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
                                      <button onClick={onFavoriteButtonClick} className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                                        <svg className="place-card__bookmark-icon" width="18" height="19">
                                          <use xlinkHref="#icon-bookmark"></use>
                                        </svg>
                                        <span className="visually-hidden">In bookmarks</span>
                                      </button>
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
                              ))}
                              <p></p>
                            </div>
                          </li>
                        </ul>
                      );
                    }
                    return ``;
                  })
                  }
                </React.Fragment>
              }
            </section>
          </div>
        </main>
        <footer className="footer container">
          <a className="footer__logo-link" href="main.html">
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
          </a>
        </footer>
      </div>
    );
  }
}


Favorites.propTypes = {
  favoriteOffers: PropTypes.array.isRequired,
  changeFavoriteStatusAction: PropTypes.func.isRequired,
  loadFavoriteOffersAction: PropTypes.func.isRequired,
};

const mapStateToProps = ((state) => ({
  favoriteOffers: getOffersFavorite(state)
}));

const mapDispatchToProps = ((dispatch) => ({
  loadFavoriteOffersAction() {
    dispatch(getFavoriteOffers());
  },
  changeFavoriteStatusAction(id, num) {
    dispatch(changeFavoriteStatus(id, num));
  }
}));

export {Favorites};
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);


import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {getOffersFavorite} from "../../store/selectors/selectors";
import Header from "../header/header";
import {getFavoriteOffers, changeFavoriteStatus} from "../../store/api-actions";
import {CITIES} from "../../const";
import Footer from "../footer/footer";
import FavoriteCard from "../favorite-card/favorite-card";


class Favorites extends PureComponent {
  constructor(props) {
    super(props);
    this.onFavoriteButtonClick = this.onFavoriteButtonClick.bind(this);
  }


  componentDidMount() {
    const {loadFavoriteOffersAction} = this.props;

    loadFavoriteOffersAction();
  }

  onFavoriteButtonClick(evt) {
    const offer = evt.target.closest(`.place-card`);
    if (!offer) {
      return;
    }

    this.props.changeFavoriteStatus(offer.id, 0);
  }

  render() {
    const {favoriteOffers} = this.props;


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
                                <FavoriteCard
                                  key={offer.id}
                                  offer={offer}
                                  onFavoriteButtonClick={this.onFavoriteButtonClick} />
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
        <Footer />
      </div>
    );
  }
}


Favorites.propTypes = {
  favoriteOffers: PropTypes.array.isRequired,
  changeFavoriteStatus: PropTypes.func.isRequired,
  loadFavoriteOffersAction: PropTypes.func.isRequired,
};

const mapStateToProps = ((state) => ({
  favoriteOffers: getOffersFavorite(state)
}));

const mapDispatchToProps = ((dispatch) => ({
  loadFavoriteOffersAction() {
    dispatch(getFavoriteOffers());
  },
  changeFavoriteStatus(id, num) {
    dispatch(changeFavoriteStatus(id, num));
  }
}));

export {Favorites};
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);


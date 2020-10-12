import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import OfferCard from '../offer-card/offer-card';

class OffersList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {activeOffer: null};
    this._handleOfferHover = this._handleOfferHover.bind(this);
  }

  _handleOfferHover(id) {
    this.setState({
      activeOffer: id
    });
  }

  render() {
    const {offers} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => (
          <OfferCard
            key={offer.id}
            offer={offer}
            id = {offer.id}
            onHoverOffer = {this._handleOfferHover}
          />))}
      </div>
    );
  }
}

OffersList.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default OffersList;

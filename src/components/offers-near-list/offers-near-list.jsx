import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import OfferCard from '../offer-card/offer-card';


class OffersNearList extends PureComponent {
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
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {offers.slice(0, 3).map((offer) => (
            <OfferCard
              key={offer.id}
              offer={offer}
              id = {offer.id}
              onHoverOffer = {this._handleOfferHover}
            />))}
        </div>
      </section>
    );
  }
}

OffersNearList.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default OffersNearList;

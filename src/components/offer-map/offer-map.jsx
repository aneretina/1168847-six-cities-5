import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {ZOOM, Icon, ID_MAP_CONTAINER} from "../../const.js";

class OfferMap extends PureComponent {
  constructor(props) {
    super(props);
    this._map = null;
  }

  componentDidMount() {
    const {offers, offerId} = this.props;
    const cityCoordinates = offers[0].location;

    const icon = leaflet.icon({
      iconUrl: Icon.URL,
      iconSize: Icon.SIZE
    });

    const activeIcon = leaflet.icon({
      iconUrl: Icon.ACTIVE_URL,
      iconSize: Icon.SIZE
    });

    this._map = leaflet.map(ID_MAP_CONTAINER, {
      center: cityCoordinates,
      zoom: ZOOM,
      zoomControl: false,
      marker: true
    });


    leaflet
  .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
    attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
  })
  .addTo(this._map);


    offers.forEach((offer) => {
      if (offer.id === offerId) {
        leaflet
      .marker(offer.location, {icon: activeIcon})
      .addTo(this._map);
      } else {
        leaflet
        .marker(offer.location, {icon})
        .addTo(this._map);
      }
    });
  }

  componentDidUpdate() {
    this._map.remove();
    this.componentDidMount();
  }

  render() {
    const {className} = this.props;
    return (
      <section className={`map ${className}`} id="map"></section>
    );
  }
}

OfferMap.propTypes = {
  offerId: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired,
  className: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.currentCityOffers,
  offerId: state.activeOfferId
});

export {OfferMap};
export default connect(mapStateToProps)(OfferMap);

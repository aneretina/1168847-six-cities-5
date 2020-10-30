import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {ZOOM, Icon, ID_MAP_CONTAINER, CitiesCoordinates} from "../../const.js";

class OfferMap extends PureComponent {
  constructor(props) {
    super(props);
    this._map = null;

    this.defaultIcon = leaflet.icon({
      iconUrl: Icon.URL,
      iconSize: Icon.SIZE
    });

    this.activeIcon = leaflet.icon({
      iconUrl: Icon.ACTIVE_URL,
      iconSize: Icon.SIZE
    });

    this._pins = new Map();
  }

  componentDidMount() {
    const {offers, city} = this.props;

    this._map = leaflet.map(ID_MAP_CONTAINER, {
      center: CitiesCoordinates[city.toUpperCase()],
      zoom: ZOOM,
      zoomControl: false,
      marker: true
    });

    leaflet
  .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
    attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
  })
  .addTo(this._map);

    this._addPins(offers);
  }

  componentDidUpdate(prevProps) {
    const {offers, city, offerId} = this.props;

    if (city !== prevProps.city) {
      this._removePins();
      this._setView();
    }

    this._addPins(offers);

    if (offerId !== prevProps.offerId) {
      this._deactivateMapPin(prevProps.offerId);
      this._activateMapPin(offerId);
    }
  }

  _addPins() {
    const {offerId, offers} = this.props;
    offers.forEach((offer) => {
      const pin = leaflet
    .marker(offer.location, {icon: this.defaultIcon})
    .addTo(this._map);
      this._pins.set(offer.id, pin);
    });
    this._activateMapPin(offerId);
  }

  _activateMapPin(offerId) {
    const marker = this._pins.get(offerId);
    if (marker) {
      marker.setIcon(this.activeIcon);
    }
  }

  _deactivateMapPin(offerId) {
    const pin = this._pins.get(offerId);
    if (pin) {
      pin.setIcon(this.defaultIcon);
    }
  }

  _setView() {
    this._map.setView(CitiesCoordinates[this.props.city.toUpperCase()], ZOOM);
  }

  _removePins() {
    this._pins.forEach((pin) => {
      pin.removeFrom(this._map);
    });
    this._pins.clear();
  }

  render() {
    const {className} = this.props;
    return (
      <section className={`map ${className}`} id="map"></section>
    );
  }
}

OfferMap.propTypes = {
  offers: PropTypes.array.isRequired,
  className: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  offerId: PropTypes.number.isRequired
};

const mapStateToProps = (state) => ({
  offers: state.currentCityOffers,
  offerId: state.activeOfferId,
  city: state.city
});

export {OfferMap};
export default connect(mapStateToProps)(OfferMap);

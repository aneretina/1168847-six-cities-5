import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {Icon, ID_MAP_CONTAINER} from "../../const.js";
import {getCurrentCityOffers, getActiveOfferId, getCurrentCity} from '../../store/selectors/selectors.js';

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
    const {offers, cityCoords, zoom} = this.props;

    this._map = leaflet.map(ID_MAP_CONTAINER, {
      center: cityCoords,
      zoom,
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
    const {offers, offerId} = this.props;


    this._removePins();
    this._setView();
    this._addPins(offers);


    if (offerId !== prevProps.offerId) {
      this._deactivateMapPin(prevProps.offerId);
      this._activateMapPin(offerId);
    }
  }

  render() {
    const {className} = this.props;
    return (
      <section className={`map ${className}`} id="map"></section>
    );
  }

  _addPins() {
    const {offerId, offers, mainOffer} = this.props;

    offers.forEach((offer) => {
      const pin = leaflet
    .marker([offer.location.latitude, offer.location.longitude], {icon: this.defaultIcon})
    .addTo(this._map);
      this._pins.set(offer.id, pin);
    });
    this._activateMapPin(offerId);

    if (mainOffer) {
      leaflet
        .marker([mainOffer.location.latitude, mainOffer.location.longitude], {icon: this.activeIcon})
        .addTo(this._map);
    }
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
    this._map.setView(this.props.cityCoords, this.props.zoom);
  }

  _removePins() {
    this._pins.forEach((pin) => {
      pin.removeFrom(this._map);
    });
    this._pins.clear();
  }
}

OfferMap.propTypes = {
  offers: PropTypes.array.isRequired,
  className: PropTypes.string.isRequired,
  offerId: PropTypes.number.isRequired,
  cityCoords: PropTypes.arrayOf(PropTypes.number).isRequired,
  zoom: PropTypes.number.isRequired,
  mainOffer: PropTypes.object,
};

const mapStateToProps = (state, props) => ({
  offers: props.offers || getCurrentCityOffers(state),
  offerId: getActiveOfferId(state),
  city: getCurrentCity(state)
});

export {OfferMap};
export default connect(mapStateToProps)(OfferMap);

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
  
    this.icon = leaflet.icon({
      iconUrl: Icon.URL,
      iconSize: Icon.SIZE
    });

    this.activeIcon = leaflet.icon({
      iconUrl: Icon.ACTIVE_URL,
      iconSize: Icon.SIZE
    });

    this._pins = [];
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

  _addPins() {
    const {offerId, offers} = this.props;
    offers.forEach((offer) => {
      const pin = leaflet
    .marker(offer.location, {icon: offer.id === offerId ? this.activeIcon : this.icon})
    .addTo(this._map);
      this._pins = [...this._pins, pin];
    });
  }


  componentDidUpdate() {
    const {offers} = this.props;
    this._removePins();
    this._addPins(offers);
  }

  _removePins() {
    this._pins.forEach((pin) => {
      pin.removeFrom(this._map);
    });
    this._pins = [];
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
  city: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.currentCityOffers,
  offerId: state.activeOfferId,
  city: state.city
});

export {OfferMap};
export default connect(mapStateToProps)(OfferMap);

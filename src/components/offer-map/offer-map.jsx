import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {ZOOM, CitiesCoordinates, Icon, ID_MAP_CONTAINER} from "../../const.js";

class OfferMap extends PureComponent {
  constructor(props) {
    super(props);
    this._map = null;
  }

  componentDidMount() {
    const {offers} = this.props;
    const offersLocations = offers.map((offer) => offer.location);

    const icon = leaflet.icon({
      iconUrl: Icon.URL,
      iconSize: Icon.SIZE
    });

    this._map = leaflet.map(ID_MAP_CONTAINER, {
      center: CitiesCoordinates.Amsterdam,
      zoom: ZOOM,
      zoomControl: false,
      marker: true
    });

    this._map.setView(CitiesCoordinates.AMSTERDAM, ZOOM);

    leaflet
  .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
    attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
  })
  .addTo(this._map);


    offersLocations.forEach((location) => {
      leaflet
      .marker(location, {icon})
      .addTo(this._map);
    });
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
  className: PropTypes.string.isRequired
};

export default OfferMap;

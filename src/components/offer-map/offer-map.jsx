import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {ZOOM, CitiesCoordinates, Icon} from "../../const.js";

class OfferMap extends PureComponent {
  constructor(props) {
    super(props);
    this._mapRef = createRef();
  }

  componentDidMount() {
    const {offers} = this.props;

    const icon = leaflet.icon({
      iconUrl: Icon.URL,
      iconSize: Icon.SIZE
    });

    this.map = leaflet.map(this._mapRef.current, {
      center: CitiesCoordinates.Amsterdam,
      zoom: ZOOM,
      zoomControl: false,
      marker: true
    });

    this.map.setView(CitiesCoordinates.Amsterdam, ZOOM);

    leaflet
  .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
    attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
  })
  .addTo(this.map);


    offers.forEach((offer) => {
      leaflet
      .marker(offer.location, {icon})
      .addTo(this.map);
    });
  }

  render() {
    return (
      <section className="cities__map map">


      </section>
    );
  }
}

OfferMap.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default OfferMap;

import React, {Component} from 'react'
import { Map as LeafletMap, TileLayer, Marker } from 'react-leaflet';
import EventPopup from './EventPopup';

class SimpleExample extends Component {
    state = {
        lat: 53.4808,
        lng: -2.2426,
        zoom: 6,
      }

  render() {     
    const position = [this.state.lat, this.state.lng]
    const zoom = this.state.zoom;

    return (
      <LeafletMap
        center={position}
        zoom={zoom}
        maxZoom={10}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={position}>
          <EventPopup/>
        </Marker>
        <Marker position={[51.5074, -0.1278]}>
          <EventPopup/>
        </Marker>
      </LeafletMap>
    );
  }
}

export default SimpleExample
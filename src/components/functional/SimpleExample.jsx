import React, {Component} from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

class SimpleExample extends Component {
    state = {
        lat: 53.4808,
        lng: -2.2426,
        zoom: 13,
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
          <Popup>
            Popup for any custom information.
          </Popup>
        </Marker>
      </LeafletMap>
    );
  }
}

export default SimpleExample
import React, {Component} from 'react'
import { Map as LeafletMap, TileLayer, Marker } from 'react-leaflet';
import EventPopup from './EventPopup';

//TODO display default map of manchester

class EventMap extends Component {
    state = {
        lat: 53.4808,
        lng: -2.2426,
        zoom: 13,
      }

  render() {     
    const position = [this.state.lat, this.state.lng]
    const zoom = this.state.zoom;
    const eventsArr = this.props.events;
    

    return (      
      <LeafletMap
        center={position}
        zoom={zoom}
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
        {/* <Marker position={position}>
          <EventPopup/>
        </Marker> */}
        {
          eventsArr.map(singleEvent => {
            return (<Marker key={singleEvent.id} position={   
              [singleEvent._embedded.venues[0].location.latitude, singleEvent._embedded.venues[0].location.longitude]
          }>
            <EventPopup/>
          </Marker>)   
        })
      }

        {/* <Marker position={[51.5074, -0.1278]}>
          <EventPopup/>
        </Marker> */}
      </LeafletMap>
    );
  }
}

export default EventMap
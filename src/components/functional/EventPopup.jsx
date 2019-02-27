import React, { Fragment } from 'react';
import { Popup } from 'react-leaflet';

const EventPopup = ({ singleEvent: { name, url, dates: { start: { localDate, localTime } }, _embedded: { venues } } }) => {

    return (
        <Fragment>
            <Popup>
                <p>{name}</p>
                <p><a href={url} target="_blank" alt={name}>Buy Tickets</a></p>
                <p>Date : {localDate}</p>
                <p>Time : {localTime}</p>
                <p>{venues[0].address.line1}</p>
                <p>{venues[0].city.name}</p>
                <p>{venues[0].postalCode}</p>
            </Popup>
        </Fragment>
    )
}

export default EventPopup;

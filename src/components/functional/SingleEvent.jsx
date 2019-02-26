import React from 'react';

// TODO format date, time

const SingleEvent = ({ event: { name, url, dates: { start: { localDate, localTime } }, _embedded: { venues } } }) => {
    return (
        <li className="singleEvent">
            <p>{name}</p>
            <p><a href={url} target="_blank" alt={name}>Buy Tickets</a></p>
            <p>Date : {localDate}</p>
            <p>Time : {localTime}</p>
            <p>{venues[0].address.line1}</p>
            <p>{venues[0].city.name}</p>
            <p>{venues[0].postalCode}</p>
        </li >
    )
}

export default SingleEvent;
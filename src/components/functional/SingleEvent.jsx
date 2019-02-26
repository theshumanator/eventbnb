import React from 'react';

const SingleEvent = ({event: {name, type, url, dates: {start: {localDate, localTime}}, _embedded: {venues}}}) => {
    return (
        <li>
            <p>{name}</p>
            <p>{type}</p>
            <p>{url}</p>
            <p>{localDate} {localTime}</p>
            <p>{venues[0].postalCode}</p>
        </li>
    )
}

export default SingleEvent;
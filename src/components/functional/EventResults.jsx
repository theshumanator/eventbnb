import React from 'react';
import SingleEvent from './SingleEvent';
import EventMap from './EventMap';

const EventResults = (props) => {
    return (
        <div>
            <ul>
                {props.events.map(event => <SingleEvent key={event.id} event={event} />)}
            </ul>

            <EventMap />
        </div>
    )
}

export default EventResults;
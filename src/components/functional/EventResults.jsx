import React from 'react';
import SingleEvent from './SingleEvent';
import EventMap from './EventMap';

const EventResults = (props) => {
    return (
        <div>
            <ul className="event-results">
                {props.events.map(event => <SingleEvent key={event.id} event={event} />)}
            </ul>
        </div>
    )
}

export default EventResults;
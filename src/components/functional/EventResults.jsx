import React from 'react';
import SingleEvent from './SingleEvent';
import Pagination from './Pagination';
import EventMap from './EventMap';

const EventResults = (props) => {
    return (
        <div>
            <ul>
                {props.events.map(event => <SingleEvent key={event.id} event={event}/>)}                
            </ul>
            
            <Pagination/>
            <EventMap/>
        </div>
    )
}

export default EventResults;
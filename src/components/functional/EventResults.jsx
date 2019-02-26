import React from 'react';
import SingleEvent from './SingleEvent';
import Pagination from './Pagination';
import EventMap from './EventMap';

const EventResults = () => {
    return (
        <div>
            <SingleEvent/>
            <Pagination/>
            <EventMap/>
        </div>
    )
}

export default EventResults;
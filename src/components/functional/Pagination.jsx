import React from 'react';

// passing 2 functions down to handle the buttons
// do not this.props.fn IE props.fn

const Pagination = (props) => {
    return (
        <div>
            <button onClick={props.handlePreviousPage}>Previous</button>
            <button onClick={props.handleNextPage}>Next</button>
        </div>
    )
}

export default Pagination;
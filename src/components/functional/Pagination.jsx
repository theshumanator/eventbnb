import React from 'react';

// passing 2 functions down to handle the buttons
// passing down state to change disabled status on prev next buttons

const Pagination = (props) => {

    const currentPage = props.currentPage;
    const totalPages = props.totalPages;

    // PREV
    let prevButtonDisabled = false
    if (currentPage === 0) prevButtonDisabled = true;

    // NEXT
    let nextButtonDisabled = false
    if (currentPage === totalPages - 1) nextButtonDisabled = true;

    return (
        <div className="pagination">
            <button disabled={prevButtonDisabled} onClick={props.handlePreviousPage}>Previous</button>
            <button disabled={nextButtonDisabled} onClick={props.handleNextPage}>Next</button>
        </div >
    )
}

export default Pagination;
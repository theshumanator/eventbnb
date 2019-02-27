import React, { Component } from 'react';
import Title from './components/functional/Title';
import Searchbox from './components/functional/Searchbox';
import EventResults from './components/functional/EventResults';
import Pagination from './components/functional/Pagination';

// TODO what happens if user submits "" for an event, currently get all events back.
// TODO add error message if keyword does not match any events
// TODO can not goto prevPage -1 etc
// NEXT need to FETCH on submit handlers for prev/next buttons

class App extends Component {
  state = {
    searchValue: '',
    events: null,
    currentPage: 0,
    totalPages: 0,
    isGetNewPage: false
  }

  handleSearchSubmit = (event) => {
    event.preventDefault();
    fetch(`https://app.ticketmaster.com/discovery/v2/events.json?countryCode=GB&apikey=uzE9qNVGG7cDi4BnIfRyD94V1F1xmyNg&city=Manchester&keyword=${this.state.searchValue}&page=${this.state.currentPage}`)
      .then(response => response.json())
      .then((data) => {

        if (data.page.totalElements === 0) {
          this.setState({ events: null, isGetNewPage: false })
        } else {
          const eventsObj = data._embedded.events;
          this.setState({ events: eventsObj, totalPages: data.page.totalPages, isGetNewPage: false });
        }
      })
      .catch(error => console.log(error))

  }

  handleChange = (event) => {

    this.setState({ searchValue: event.target.value, isGetNewPage: false })
  }

  handlePreviousPage = () => {

    this.setState((prevState) => {
      return { currentPage: prevState.currentPage - 1, isGetNewPage: true }
    })
  }

  handleNextPage = () => {
    this.setState((prevState) => {
      return { currentPage: prevState.currentPage + 1, isGetNewPage: true }
    })
  }

  componentDidUpdate = () => {
    if (this.state.isGetNewPage) {
      fetch(`https://app.ticketmaster.com/discovery/v2/events.json?countryCode=GB&apikey=uzE9qNVGG7cDi4BnIfRyD94V1F1xmyNg&city=Manchester&keyword=${this.state.searchValue}&page=${this.state.currentPage}`)
        .then(response => response.json())
        .then((data) => {

          if (data.page.totalElements === 0) {
            this.setState({ events: null })
          } else {
            const eventsObj = data._embedded.events;
            this.setState({ events: eventsObj, totalPages: data.page.totalPages });
          }
        })
        .catch(error => console.log(error))
    }
  }



  render() {
    const { events } = this.state;
    return (
      <div className="App">
        <Title />
        <Searchbox handleSearchSubmit={this.handleSearchSubmit} handleChange={this.handleChange} />
        {/*  Passing down this.state.events as props to eventresults component */}
        {events && <EventResults events={events} />}
        <Pagination handlePreviousPage={this.handlePreviousPage} handleNextPage={this.handleNextPage} currentPage={this.state.currentPage} totalPages={this.state.totalPages} />
      </div>
    );
  }
}

export default App;

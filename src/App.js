import React, { Component } from 'react';
import Title from './components/functional/Title';
import Searchbox from './components/functional/Searchbox';
import EventResults from './components/functional/EventResults';
import Pagination from './components/functional/Pagination';
import EventMap from './components/functional/EventMap';


// TODO what happens if user submits "" for an event, currently get all events back.
// TODO add error message if keyword does not match any events

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
    fetch(`https://app.ticketmaster.com/discovery/v2/events.json?countryCode=GB&apikey=XXX&city=Manchester&keyword=${this.state.searchValue}&page=${this.state.currentPage}`)
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
      fetch(`https://app.ticketmaster.com/discovery/v2/events.json?countryCode=GB&apikey=xxx&city=Manchester&keyword=${this.state.searchValue}&page=${this.state.currentPage}`)
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

      <div className="App grid-container">     
        <div className="title">
          <Title />        
          <Searchbox handleSearchSubmit={this.handleSearchSubmit} handleChange={this.handleChange} />
          <Pagination handlePreviousPage={this.handlePreviousPage} handleNextPage={this.handleNextPage} currentPage={this.state.currentPage} totalPages={this.state.totalPages} />      
        </div>

        <div className="EventResults">          
          {/*  Passing down this.state.events as props to eventresults component */}
          {events && <EventResults events={events} />}
            
        </div> 
        <div className="EventsMap">
        {events && <EventMap events={events} />}
        </div>
        
      </div>
    );
  }
}

export default App;

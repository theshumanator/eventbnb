import React, { Component } from 'react';
import Title from './components/functional/Title';
import Searchbox from './components/functional/Searchbox';
import EventResults from './components/functional/EventResults';

// TODO what happens if user submits "" for an event, currently get all events back.
// TODO add error message if keyword does not match any events

class App extends Component {
  state = {
    searchValue: '',
    events: null
  }

  handleSearchSubmit = (event) => {
    event.preventDefault();
    fetch(`https://app.ticketmaster.com/discovery/v2/events.json?countryCode=GB&apikey=uzE9qNVGG7cDi4BnIfRyD94V1F1xmyNg&city=Manchester&keyword=${this.state.searchValue}`)
      .then(response => response.json())
      .then((data) => {

        if (data.page.totalElements === 0) {
          this.setState({ events: null })
        } else {
          const eventsObj = data._embedded.events;
          this.setState({ events: eventsObj });
        }
      })
      .catch(error => console.log(error))

  }

  handleChange = (event) => {
    this.setState({ searchValue: event.target.value })
  }

  render() {
    const { events } = this.state;
    return (
      <div className="App">
        <Title />
        <Searchbox handleSearchSubmit={this.handleSearchSubmit} handleChange={this.handleChange} />
        {/*  Passing down this.state.events as props to eventresults component */}
        {events && <EventResults events={events} />}


      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Title from './components/functional/Title';
import Searchbox from './components/functional/Searchbox';
import EventResults from './components/functional/EventResults';

class App extends Component {
  state = {
    searchValue: '',
    events: null
}

//TODO handle null results from api like supernature
handleSearchSubmit = (event) => {
    event.preventDefault();
    fetch(`https://app.ticketmaster.com/discovery/v2/events.json?countryCode=GB&apikey=uzE9qNVGG7cDi4BnIfRyD94V1F1xmyNg&city=Manchester&keyword=${this.state.searchValue}`)
    .then(response => response.json())
    .then(({_embedded: {events}}) => {      
      this.setState({events});
    })
    .catch(error => console.log(error))

}

handleChange = (event) => {        
    this.setState({searchValue: event.target.value})
}

  render() {    
    const {events} = this.state;
    return (
      <div className="App">
       <Title/>
       <Searchbox handleSearchSubmit={ this.handleSearchSubmit} handleChange={this.handleChange}/>
       {/*  Passing down this.state.events as props to eventresults component */}
       {events && <EventResults events={events}/>}
        

      </div>
    );
  }
}

export default App;

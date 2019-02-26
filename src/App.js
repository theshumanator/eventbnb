import React, { Component } from 'react';
import Title from './components/functional/Title';
import Searchbox from './components/functional/Searchbox';
import EventResults from './components/functional/EventResults';

class App extends Component {
  state = {
    searchValue: ''
}

handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.searchValue);
    
}

handleChange = (event) => {        
    this.setState({searchValue: event.target.value})
}

  render() {
    return (
      <div className="App">
       <Title/>
       <Searchbox handleSearchSubmit={ this.handleSearchSubmit} handleChange={this.handleChange}/>
       <EventResults/>       

      </div>
    );
  }
}

export default App;

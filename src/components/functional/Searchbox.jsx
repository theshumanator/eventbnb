import React, {Component} from 'react';

class Searchbox extends Component {
   
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSearchSubmit}>
                    <label htmlFor="searchInput">Search for events </label>
                    <input id="searchInput" type="text" onChange={this.props.handleChange}  />   
                    <input type="submit"/>
                </form>            
            </div>
        )
    }
}


export default Searchbox;
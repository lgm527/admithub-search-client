import React from 'react';
import './App.css';
import SearchList from './containers/SearchList';
import PinList from './containers/PinList';

class App extends React.Component {
  state = { 
    country: "",
    searchResults: [],
    pins: []
   }

   handleChange = (e) => {
    this.setState({country: e.target.value});
    if (e.target.value !== "") {
      fetch(`https://restcountries.eu/rest/v2/name/${e.target.value}`, {
        method: "GET",
        credentials: "same-origin",
        headers: {
          "Accept": "application/json"
        }
      })
      .then(res => res.json())
      .then(results => {
        let firstFiveResults = results.slice(0,5)
        this.setState({
          searchResults: firstFiveResults
        })
      })
    } else {
      this.setState({
        searchResults: []
      })
    }
  }

  addPin = (pin) => {
    this.setState( prevState => (
      prevState.pins.indexOf(pin) === -1 ?
      prevState.pins.length < 1 ?
      {pins: [pin]} : {pins: [...prevState.pins, pin]}
      :
      null
    ))
  }

  removePin = (pin) => {
    let pins = [...this.state.pins]
    let removeMe = pins.indexOf(pin)
    if (removeMe > -1) {
        pins.splice(removeMe, 1);
        this.setState({pins})
    }
  }
  
  render() { 
    return ( 
      <div className="App">
      <h1><span role="img" aria-label="owl">🦉</span> Hello AdmitHub Team! <span role="img" aria-label="hand-waving">👋</span></h1>
      
      <div className="row">
        <div className="col-sm-6">
          <h1>Search</h1>
          <div className="form-group">
            <label htmlFor="country">Country:</label>
            <input 
            onChange={this.handleChange} 
            value={this.state.country}
            type="text" 
            className="form-control" 
            id="country" />
          </div>

          {
            this.state.searchResults[0] ?
            <SearchList results={this.state.searchResults} add={this.addPin} />
            : null
          }
        </div>

        <div className="col-sm-6">
          {
            this.state.pins[0] ?
            <PinList pins={this.state.pins} remove={this.removePin}/>
            : null
          }
        </div>
      </div>

    </div>
     );
  }
}
 
export default App;
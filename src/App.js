import React from 'react';
import './App.css';
import SearchList from './containers/SearchList';
import PinList from './containers/PinList';

class App extends React.Component {
  state = { 
    country: "",
    loadingSearchResults: false,
    searchResults: [],
    pins: []
   }

   handleChange = (e) => {
    this.setState({
      country: e.target.value,
      loadingSearchResults: true
    })
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
        if (results[0]) {
          let firstFiveResults = results.slice(0,5)
          this.setState({
            searchResults: firstFiveResults,
            loadingSearchResults: false
          })
        } else {
          this.setState({
            searchResults: [],
            loadingSearchResults: false
          })
        }
      })
    } else {
      this.setState({
        searchResults: [],
        loadingSearchResults: false
      })
    }
  }

  addPin = (pin) => {
    let pinObj = {name: pin.name, flag: pin.flag}

    if (!this.state.pins.some(pin => pin.name === pinObj.name)) {
      fetch("http://localhost:3000/countries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(pinObj)
      })
      .then(res => res.json())
      .then( () => {
        this.getPins()
      })
    }
  }

  removePin = (pin) => {
    fetch(`http://localhost:3000/countries/${pin.id}`, {
      method: "DELETE",
      headers: {
        "Accept": "application/json"
      }
    })
    .then( () => {
      this.getPins()
    })
  }

  getPins = () => {
    fetch("http://localhost:3000/countries")
    .then(res => res.json())
    .then(pins => {
      this.setState({
        pins: pins
      })
    })
  }

  componentDidMount() {
    this.getPins()
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
            autoComplete="off"
            onChange={this.handleChange} 
            value={this.state.country}
            type="text" 
            className="form-control" 
            id="country" />
          </div>

          {
            this.state.loadingSearchResults ?
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
            :
            null
          }

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
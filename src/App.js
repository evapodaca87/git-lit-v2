
import React, { Component } from 'react'
import './App.css'
import GoogleMapsContainer from './Components/GoogleMapsContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
          <GoogleMapsContainer />
      </div>
    )
  }
}

export default App

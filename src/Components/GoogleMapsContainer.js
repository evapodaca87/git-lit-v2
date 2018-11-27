import React,{Component} from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'


class GoogleMapsContainer extends Component {
constructor(props){
  super(props)
    this.state={
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    }
}

  // fetchPlaces = (mapProps, map) => {
  //   console.log(this.state.initialCenter.lat, this.state.initialCenter.lng);
  //   fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=(${this.state.initialCenter.lat}),(${this.state.initialCenter.lng})&radius=5000&keyword=bars&key=AIzaSyBMyIR5up1KiKHZzvm6N7xAxm8eREIDpCM`)
  //     .then(
  //       function(response){
  //         response.json()
  //           .then(function(data) {
  //             console.log(data)
  //           })
  //       }
  //     )
  //     }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  onMapClick = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }

render() {
  const style = {
    width: '100vw',
    height: '75vh',
    'marginLeft': 'auto',
    'marginRight': 'auto'
  }
 
    return (
      <div>
        <Map
        item
        xs = { 12 }
        style = { style }
        google = { this.props.google }
        onClick = { this.onMapClick }
        zoom = { 14 }
        initialCenter = {this.props.initialCenter}>


        <Marker
          onClick = { this.onMarkerClick }
          title = { 'Changing Colors Garage' }
          position = {this.props.initialCenter}
          name = { 'Changing Colors Garage' }
        />
          <InfoWindow
            marker = { this.state.activeMarker }
            visible = { this.state.showingInfoWindow }>
            <div>
              <h3>Current Location</h3>
            </div>
          </InfoWindow>
        </Map>
      </div>
    )
  }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyBMyIR5up1KiKHZzvm6N7xAxm8eREIDpCM'
})(GoogleMapsContainer)

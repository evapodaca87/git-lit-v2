import React from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'

class GoogleMapsContainer extends React.Component{

 state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        initialCenter: { lat: 39.75752, lng: -105.00687 }
  }

  async componentDidMount() {
    const { lat, lng } = await this.getcurrentLocation()
    this.setState({ initialCenter: { lat, lng }})
  }


  // async fetchPlaces() {
  //   const response = await fetch('https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJN1t_tDeuEmsRUsoyG83frY4&fields=name,rating,formatted_phone_number&key=AIzaSyBMyIR5up1KiKHZzvm6N7xAxm8eREIDpCM')
  //   const places = await response.json()
  //   console.log(places)
    // this.setState({places: places})
  // }

  fetchPlaces = (mapProps, map) => {
    fetch('https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJN1t_tDeuEmsRUsoyG83frY4&fields=name,rating,formatted_phone_number&key=AIzaSyBMyIR5up1KiKHZzvm6N7xAxm8eREIDpCM')
      .then(
        function(response){
          response.json()
            .then(function(data) {
              console.log(data)
            })
        }
      )
      }

   getcurrentLocation = () => {
    if (navigator && navigator.geolocation) {
      return new Promise((resolve) => {
        navigator.geolocation.getCurrentPosition(position => {
          const coords = position.coords
          resolve({
            lat: coords.latitude,
            lng: coords.longitude
          })
        })
      })
    }
    return { lat: 39.75752, lng: -105.00687 }
  }

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
        initialCenter = {this.state.initialCenter}>

        <Marker
          onClick = { this.onMarkerClick }
          title = { 'Changing Colors Garage' }
          position = {this.state.initialCenter}
          name = { 'Changing Colors Garage' }
        />
          <InfoWindow
            marker = { this.state.activeMarker }
            visible = { this.state.showingInfoWindow }>
            <div>
              <h3>Current Location</h3>
            </div>
          </InfoWindow>
          {this.fetchPlaces()}
        </Map>
      </div>
    )
  }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyBMyIR5up1KiKHZzvm6N7xAxm8eREIDpCM'
})(GoogleMapsContainer)

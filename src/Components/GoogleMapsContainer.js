import React,{Component, createContext} from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'


class GoogleMapsContainer extends Component {
constructor(props){
  super(props)
    this.state={
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      markers: []
    }
}

componentDidMount () {
  this.fetchPlaces()
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

  fetchPlaces = (mapProps, map) => {
    const context = this
    const lat = this.props.initialCenter.lat
    const lng = this.props.initialCenter.lng
    console.log(this.props.initialCenter.lat, this.props.initialCenter.lng)
    return fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=1500&type=restaurant&keyword=bar&key=AIzaSyBMyIR5up1KiKHZzvm6N7xAxm8eREIDpCM`)
      .then(response => response.json())
      .then(function(data) {
        console.log("data",data.results)
        const markers = data.results.map(bar => {
          return (
              <Marker
                key = { bar.id }
                onClick = { context.onMarkerClick }
                title = { bar.name }
                position = { bar.geometry.location }
                name = { bar.name }
              />
          )
        })
        context.setState({markers})
      }     
    )}
  
        

render() {
  const style = {
    width: '100vw',
    height: '75vh',
    'marginLeft': 'auto',
    'marginRight': 'auto'
  }
 
  console.log('fetch', this.fetchPlaces())
  return (
    <div>
        <Map
        item
        xs = { 12 }
        style = { style }
        google = { this.props.google }
        onClick = { this.onMapClick }
        zoom = { 14 }
        initialCenter = {this.props.initialCenter}
        >
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
            {this.state.markers}
        </Map>
      </div>
    )
  }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyBMyIR5up1KiKHZzvm6N7xAxm8eREIDpCM'
})(GoogleMapsContainer)

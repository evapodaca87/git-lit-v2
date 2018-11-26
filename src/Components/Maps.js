import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Maps extends Component {
    state = {
        myLocation: { lat: 39.742043 , lng: -104.991531 } 
    }
  
    static defaultProps = {
    center: {
      lat: 39.742043,
      lng: -104.991531
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '60vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBMyIR5up1KiKHZzvm6N7xAxm8eREIDpCM' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={39.742043}
            lng={-104.991531}
            text={''}
          />
        </GoogleMapReact>
      </div>
    )
  }
}

export default Maps
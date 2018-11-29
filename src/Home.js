import React, { Component } from 'react'
import './App.css'
import GoogleMapsContainer from './Components/GoogleMapsContainer.js'
import { Button } from 'semantic-ui-react'

class Home extends Component {

    state = {
        showMap: false,
        checked: true,
        initialCenter: {
            lat:39 ,
            lng:-104
          }
    }

    async componentDidMount() {
        const coords = await this.getCurrentLocation()
        console.log("coords",coords)
      }

       getCurrentLocation = () => {
        if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              position => {
                this.setState({initialCenter:{
                  lat: position.coords.latitude,
                  lng: position.coords.longitude}
                })
              }, error =>
                {console.log(error)}
            )
          }
        else{
          return { lat: 27, lng: -100 }
        }
      }

    toggleMap = () => {
        this.setState({showMap: !this.state.showMap, checked: !this.state.checked})
    }

    render() {
        const showMap = this.state.showMap
        return (
            <div className='App2'>
                <header>
                    <img
                        className='logoHead'
                        src='http://profilepicturesdp.com/wp-content/uploads/2018/07/profile-default-picture-4.png'
                    />
                     
                     {/* <Checkbox toggle checked={this.state.showMap} onChange={this.toggleMap}/> */}
        <Button  id='litButton' toggle checked={this.state.showMap} onClick={this.toggleMap}toggle>{this.state.checked ? <img className='litFire'src='/fire1.png' /> : <img className='litFire'src='/fire2.png' />}</Button>

                    <img
                        className='logoHead'
                        src='https://files.slack.com/files-pri/T1T555TL0-FEBL8TWRX/screen_shot_2018-11-26_at_11.26.57_am.png'
                    />
                </header>
                {showMap && <GoogleMapsContainer initialCenter={this.state.initialCenter} />}
            </div>
        );
    }
}

export default Home;

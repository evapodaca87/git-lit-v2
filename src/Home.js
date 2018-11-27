import React, { Component } from 'react'
import './App.css'
import GoogleMapsContainer from './Components/GoogleMapsContainer.js'
import { Checkbox } from 'semantic-ui-react'

class Home extends Component {

    state = {
        showMap: false
    }

    toggleMap = () => {
        this.setState({showMap: !this.state.showMap})
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
                     
                     <Checkbox toggle checked={this.state.showMap} onChange={this.toggleMap}/>

                    <img
                        className='logoHead'
                        src='https://files.slack.com/files-pri/T1T555TL0-FEBL8TWRX/screen_shot_2018-11-26_at_11.26.57_am.png'
                    />
                </header>
                {showMap && <GoogleMapsContainer  />}
            </div>
        );
    }
}

export default Home;

import React, { Component } from 'react';
import '../App.css';
import Slide from '../Components/slide.js';
import { Rating } from 'semantic-ui-react'
import GoogleMapsContainer from '../Components/GoogleMapsContainer.js'
import { Checkbox } from 'semantic-ui-react'
import HomeTabs from './hometabs.js';


class Splash extends Component {

    render() {
        return (
            <div className='App'>
                <div className='head'>
                    <img
                        className='logo'
                        src='https://files.slack.com/files-pri/T1T555TL0-FEBL8TWRX/screen_shot_2018-11-26_at_11.26.57_am.png'
                    />
                </div>
                <p>
                    Git-Lit is a social networking app designed to help you find drinking buddies based on your
                    location!
                </p>
                <p>
                    Sign up for an account today, we will use your location to match you with closest Git-Lit users and
                    "Git-Lit" establishments
                </p>
                <p>Signing up is easy! & FREE!</p>
                <div className='buttons'>
                    <div className='form'>
                        <HomeTabs />
                        <div />
                    </div>
                </div>

                {/* <Home /> */}
                {/* <Profile /> */}
            </div>
        );
    }
}


export default Splash;
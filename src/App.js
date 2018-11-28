import React, { Component } from 'react';
import './App.css';
import HomeTabs from './Components/hometabs.js';
import Home from './Home.js'
import Profile from './Profile.js'


class App extends Component {

    render() {

        return (

            <div className='App'>
                <div className='head'>
                    <img
                        className='logo'
                        src='/pictures/gitlit.png'
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
                        <div>

                   </div>
                    </div>
                </div>

              <Home />
              <Profile />

            </div>
        );
    }
}

export default App;

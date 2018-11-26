import React, { Component } from 'react';
import './App.css';
import ToggleBox from './Components/Toggle.js';

class Home extends Component {
    render() {
        return (
            <div className='App2'>
                <header>
                    <img
                        className='logoHead'
                        src='http://profilepicturesdp.com/wp-content/uploads/2018/07/profile-default-picture-4.png'
                    />
                    <ToggleBox color='red' />
                    <img
                        className='logoHead'
                        src='https://files.slack.com/files-pri/T1T555TL0-FEBL8TWRX/screen_shot_2018-11-26_at_11.26.57_am.png'
                    />
                </header>
                <p className='map'>Giant map goes here</p>
            </div>
        );
    }
}

export default Home;

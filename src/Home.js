import React, { Component } from 'react';
import './App.css';
import ToggleBox from './Components/Toggle.js';
import Slide from './Components/slide.js';
import { Rating } from 'semantic-ui-react'


class Home extends Component {
    render() {
        return (
            <div className='App2'>
                <header>
                    <img
                        className='logoHead'
                        src='http://profilepicturesdp.com/wp-content/uploads/2018/07/profile-default-picture-4.png'
                    />
                      <ToggleBox />


                    <img
                        className='logoHead'
                        src='https://files.slack.com/files-pri/T1T555TL0-FEBL8TWRX/screen_shot_2018-11-26_at_11.26.57_am.png'
                    />
                </header>
                <p className='map'>Giant map goes here</p>
                <Slide />
                <h3>Bar Review</h3>
                <div className="barReview">
                  <p> Bar Name</p>
                  <p> This bar was a total peice of shit. It's no village in. </p>
                  <div className="rating">
                    <i class="trash icon"></i>
                    <Rating icon='star' defaultRating={3} maxRating={5} />
                    <i class="fire icon"></i>
                  </div>
                </div>


            </div>
        );
    }
}

export default Home;

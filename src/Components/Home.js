import React, { Component } from 'react';
import '../App.css';
import Slide from '../Components/slide.js';
import { Rating, Button, Divider, Image, Transition } from 'semantic-ui-react';
import GoogleMapsContainer from '../Components/GoogleMapsContainer.js';
import { Checkbox } from 'semantic-ui-react';

class Home extends Component {
    state = {
        showMap: false,
        initialCenter: {
            lat: 39,
            lng: -104
        },

        visible: false
    };
    toggleVisibility = () => this.setState({ visible: !this.state.visible });

    async componentDidMount() {
        console.log('component did mount ran');
        const coords = await this.getCurrentLocation();
        console.log('coords', coords);
    }

    getCurrentLocation = () => {
        if (navigator && navigator.geolocation) {
            console.log('getting location');
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    console.log('getCurrentPosition running (location callback)');
                    this.setState({
                        initialCenter: {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        }
                    });
                    console.log('initial center set', this.state.initialCenter);
                },
                (error) => {
                    console.log(error);
                }
            );
        } else {
            console.log('initial center not set');
            return { lat: 27, lng: -100 };
        }
    };

    toggleMap = () => {
        this.setState({ showMap: !this.state.showMap });
    };

    render() {
        const { visible } = this.state;
        const showMap = this.state.showMap;
        return (
            <div className='App2'>
                <header>
                    <img className='logoHead' src='/pictures/gitlit.png' />

                    <div className='fire'>
                        <Checkbox
                            toggle
                            content={visible ? 'Hide' : 'Show'}
                            onClick={this.toggleVisibility}
                            checked={this.state.showMap}
                            onChange={this.toggleMap}
                        />
                        <Divider hidden />
                    </div>
                    <div className='fire'>
                        {visible ? (
                            <Image className='image' style={{ background: `url(../pictures/fire2.png` }} />
                        ) : (
                            <Image className='image' style={{ background: `url(../pictures/fire1.png` }} />
                        )}
                    </div>
                    <img
                        className='logoHead'
                        src='https://files.slack.com/files-pri/T1T555TL0-FEBL8TWRX/screen_shot_2018-11-26_at_11.26.57_am.png'
                    />
                </header>

                {showMap && <GoogleMapsContainer initialCenter={this.state.initialCenter} />}
                <Slide />
                <h3>Bar Review</h3>
                <div className='barReview'>
                    <p> Bar Name</p>
                    <p> This bar was a total piece of shit. It's no village inn. </p>
                    <div className='rating'>
                        <i class='trash icon' />
                        <Rating icon='star' defaultRating={3} maxRating={5} />
                        <i class='fire icon' />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;

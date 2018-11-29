import React, { Component } from 'react';
import { Header, Image, Icon, Rating } from 'semantic-ui-react';
import gitlitpic from '../pictures/gitlit.png';
import anh from '../pictures/anh.png';
import { Link } from 'react-router-dom';

import '../App.css';

class Profile extends Component {
    render() {
        return (
            <div>
                <div className='profileHeader'>
                    <Header as='h2'>
                        <Image circular src={gitlitpic} /> <Link to='Home'>Return Home</Link>
                    </Header>
                </div>

                <div className='profilePicture'>
                    <Image className='picture' src={anh} size='small' />
                    <div className='tagline'>
                        <p className='underline'>Anh Nguyen</p>
                        <p className='italic'>"My life's dope & I do dope shit"</p>
                        <h3> User Rating</h3>
                        <div className='profileRating'>
                            <i class='trash icon' />
                            <Rating icon='star' defaultRating={5} maxRating={5} />
                            <i class='fire icon' />
                        </div>
                    </div>
                </div>
                <div className='barTitle'>
                    <h1>Bar Review</h1>
                </div>
                <div className='profileBarReview'>
                    <div className='barReview'>
                        <p> Victor's</p>
                        <p> This bar was soft as cake </p>
                        <div>
                            <i class='trash icon' />
                            <Rating icon='star' defaultRating={1} maxRating={5} />
                            <i class='fire icon' />
                        </div>
                    </div>
                    <div className='barReview'>
                        <p> Jody's</p>
                        <p> This bar was Lit AF!!! </p>
                        <div>
                            <i class='trash icon' />
                            <Rating icon='star' defaultRating={5} maxRating={5} />
                            <i class='fire icon' />
                        </div>
                    </div>
                    <div className='barReview'>
                        <p> Matt's</p>
                        <p> Hard Pass </p>
                        <div>
                            <i class='trash icon' />
                            <Rating icon='star' defaultRating={2} maxRating={5} />
                            <i class='fire icon' />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;

import React, { Component } from 'react';
import { Header, Image, Icon, Rating } from 'semantic-ui-react';
import gitlitpic from '../pictures/gitlit.png'
import anh from '../pictures/anh.png'

import '../App.css';

class Profile extends Component {
    render() {
        return (
            <div>
                <div className='profileHeader'>
                    <Header as='h2'>
                        <Image circular src={gitlitpic} /> Return Home
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
                            <Rating icon='star' defaultRating={3} maxRating={5} />
                            <i class='fire icon' />
                        </div>
                    </div>
                </div>
                <h1>Bar Review</h1>
                <div className='profileBarReview' />
            </div>
        );
    }
}

export default Profile;

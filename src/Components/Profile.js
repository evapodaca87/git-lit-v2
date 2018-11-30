import React, { Component } from 'react';
import { Header, Image, Icon, Rating } from 'semantic-ui-react';
import gitlitpic from '../pictures/gitlit.png';
import anh from '../pictures/anh.png';
import { Link } from 'react-router-dom';
import ReviewList from './ReviewList'
import NewReview from './NewReview'

import '../App.css';

class Profile extends Component {

    constructor(){
        super()
        this.state = {
            reviewList: [],
            newReview: false
        }
    }

    componentDidMount(){
        this.reviewFetcher()
    }

    reviewFetcher = () => {
        fetch('https://gitlitback.herokuapp.com/reviews/detailed')
        .then(response => response.json())
        .then(json => this.setState({reviewList: json.response}))
    }


    reviewToggle = () => {
        this.setState({ newReview : !this.state.newReview})
    }

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
                    <button onClick={this.reviewToggle}>New Review</button>
                    {this.state.newReview ? <NewReview reviewFetcher={this.reviewFetcher}/> : ''}
                </div>
                    <ReviewList reviewList={this.state.reviewList}/>
            </div>
        );
    }
}

export default Profile;

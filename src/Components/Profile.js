import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';



class Profile extends Component {
    render() {
        return (
            <div className='App3'>
                <header>
                <Link to="/Home">
                    <img
                        className='logoHead profile-pic'
                        alt='back2home'
                        src='https://files.slack.com/files-pri/T1T555TL0-FEBL8TWRX/screen_shot_2018-11-26_at_11.26.57_am.png' />
                </Link>
                </header>
                <div>
                <img
                    className='logoHead'
                    src='http://profilepicturesdp.com/wp-content/uploads/2018/07/profile-default-picture-4.png' />
                </div>
                <div className="Profilecontainer">
                <div>
                    <p>Name</p>
                  </div>
                  <p>Tagline</p>

                  </div>
                  <div>
                    <h1>GitLit History</h1>
                  </div>
                  <img src="https://via.placeholder.com/800x700" />
                </div>
        );
    }
}

export default Profile;

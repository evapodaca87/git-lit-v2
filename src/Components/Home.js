import React, { Component } from "react";
import "../App.css";
import Slide from "../Components/slide.js";
import { Rating } from "semantic-ui-react";
import GoogleMapsContainer from "../Components/GoogleMapsContainer.js";
import { Checkbox } from "semantic-ui-react";
import { Link } from 'react-router-dom';

class Home extends Component {
  state = {
    showMap: false,
    initialCenter: {
      lat: 39,
      lng: -104
    }
  };

  async componentDidMount() {
    const coords = await this.getCurrentLocation();
    console.log("coords", coords);
  }

  getCurrentLocation = () => {
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.setState({
            initialCenter: {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }
          });
        },
        error => {
          console.log(error);
        }
      );
    } else {
      return { lat: 27, lng: -100 };
    }
  };

  toggleMap = () => {
    this.setState({ showMap: !this.state.showMap });
  };

  render() {
    const showMap = this.state.showMap;
    return (
      <div className="App2">
        <header>
        <Link to="/Profile"><img
            className="logoHead"
            src="http://profilepicturesdp.com/wp-content/uploads/2018/07/profile-default-picture-4.png"
          />
        </Link>

          <Checkbox
            toggle
            checked={this.state.showMap}
            onChange={this.toggleMap}
          />

          <img
            className="logoHead"
            src="https://files.slack.com/files-pri/T1T555TL0-FEBL8TWRX/screen_shot_2018-11-26_at_11.26.57_am.png"
          />
        </header>

        {showMap && (
          <GoogleMapsContainer initialCenter={this.state.initialCenter} />
        )}
        <Slide />
        <h3>Bar Review</h3>
        <div className="barReview">
          <p> Bar Name</p>
          <p> This bar was a total piece of shit. It's no village in. </p>
          <div className="rating">
            <i class="trash icon" />
            <Rating icon="star" defaultRating={3} maxRating={5} />
            <i class="fire icon" />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

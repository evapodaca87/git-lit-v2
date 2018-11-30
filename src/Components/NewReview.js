import React, {Component} from "react"
import { Header, Image, Icon, Rating } from 'semantic-ui-react';


class NewReview extends Component {

  constructor(props) {
    super(props)
    this.state = {
      commentVal: "",
      starVal: "",
      barVal:""
    }
  }

  // submitReview = (event) => {
  //   event.preventDefault()
  //   this.props.postTweet(this.state)
  // }

  commentListener = (event) => {
    this.setState({ bodyVal : event.target.value })
  }




  postReview = (event) => {
    event.preventDefault()
    fetch("https://gitlitback.herokuapp.com/reviews", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "user_id": 6,
        "bar_id": 3,
        "stars": 2,
        "comment": 'so weak'
  })
    })
      .then(response => response.json())
      .then(this.props.reviewFetcher)
    this.setState({ newReview: false });
  }


  render() {
    return (
      <form className="new-tweet">
        <fieldset className="new-tweet-field">
          <legend>Submit New Review</legend>
          <label>Establishment: </label>
          <select onChange={this.setState()}>
            <option value='1'>My Brother's Bar</option>
            <option value='2'>Linger</option>
            <option value='3'>Highland Tap and Burger</option>
            <option value='4'>Forest Room 5</option>
          </select>
          <br />
          <label htmlFor="size_2">Comments: </label>
          <br />
          <textarea className="form-field" onChange={this.bodyListener} name="body" id="body" rows="6" cols="46" value={this.state.bodyVal}/>
          <br />
          <i class='trash icon' />
            <Rating icon='star' defaultRating={0} maxRating={5} />
          <i class='fire icon' />
          <button onClick={this.postReview}>Submit</button>
        </fieldset>
      </form>
    )
  }
}

export default NewReview
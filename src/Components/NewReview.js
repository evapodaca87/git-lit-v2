import React, {Component} from "react"
import { Header, Image, Icon, Rating } from 'semantic-ui-react';


class NewReview extends Component {

  constructor(props) {
    super(props)
    this.state = {
      subjectVal: "",
      bodyVal: "",
      URLVal: ""
    }
  }

  submitTweet = (event) => {
    event.preventDefault()
    this.props.postTweet(this.state)
  }

  bodyListener = (event) => {
    this.setState({ bodyVal : event.target.value })
  }

  URLListener = (event) => {
    this.setState({ URLVal : event.target.value })
  }

  render() {
    return (
      <form className="new-tweet">
        <fieldset className="new-tweet-field">
          <legend>Submit New Review</legend>
          <label htmlFor="size_2">Body: </label>
          <br />
          <textarea className="form-field" onChange={this.bodyListener} name="body" id="body" rows="6" cols="46" value={this.state.bodyVal}/>
          <br />
          <i class='trash icon' />
            <Rating icon='star' defaultRating={0} maxRating={5} />
          <i class='fire icon' />
          <button onClick={this.submitTweet} type="submit">Submit</button>
        </fieldset>
      </form>
    )
  }
}

export default NewReview
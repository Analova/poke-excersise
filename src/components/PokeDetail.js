import React, { Component } from 'react';

class PokeDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nbOfLikes: 0
    }
  }
  handleLeftClick(e) {
    console.log("Left click!")
    this.setState({
      nbOfLikes: this.state.nbOfLikes + 1
    })
  }
  handleClick(e, addedValue) {
    console.log("Left click!")
    this.setState({
      nbOfLikes: this.state.nbOfLikes + addedValue
    })
  }
  render() {
    return (
      <div className="PokeDetail">
        <img src={`/pokepictures/25.png`} alt="" />

        <br />
        <button
          className="button is-success"
          onClick={e => this.handleClick(e, 1)}>
          +1
        </button>
        <button
          className="button is-danger"
          onClick={e => this.handleClick(e, -1)}>
          -1
        </button>

        <br />
        {this.state.nbOfLikes}
      </div>
    );
  }
}

export default PokeDetail;

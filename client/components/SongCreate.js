import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { Link } from "react-router";

class SongCreate extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }
  onSubmit(event) {
    console.log("e is: ", event);
    event.preventDefault();
    this.props.mutate({
      variables: {
        title: this.state.title
      }
    });
    console.log("this.state is: ", this.state);
    console.log("SongCreate this.props is: ", this.props);
  }
  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>Create a new Song</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <lable>Song Title:</lable>
          <input
            onChange={event => {
              console.log("on change this.state is: ", this.state);
              this.setState({ title: event.target.value });
            }}
            value={this.state.title}
          />
        </form>
      </div>
    );
  }
}

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      id
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);

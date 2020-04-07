import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { Link, hashHistory } from "react-router";

class LyricCreate extends Component {
  constructor(props) {
    super(props);
    this.state = { content: "" };
  }

  onSubmit(event) {
    event.preventDefault();

    this.props
      .mutate({
        variables: {
          content: this.state.content,
          songId: this.props.songId
        }
      })
      .then(() => {
        console.log("Lyric Create then");
        // hashHistory.push("/");
        this.setState({ content: "" });
      })
      .catch(e => console.log("Lyric Create error is: ", e));
    console.log("Lyric Create this.state is: ", this.state);
    console.log("Lyric Create this.props is: ", this.props);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Add a Lyric</label>
          <input
            value={this.state.content}
            onChange={event =>
              this.setState({
                content: event.target.value
              })
            }
          />
        </form>
      </div>
    );
  }
}

const mutation = gql`
  mutation AddLyricToSong($content: String, $songId: ID) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
        content
      }
    }
  }
`;

export default graphql(mutation)(LyricCreate);

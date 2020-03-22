import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
class SongList extends Component {
  renderSongs() {
    return this.props.data.songs.map(song => {
      return <li>{song.title}</li>;
    });
  }
  render() {
    const { loading } = this.props.data;
    console.log("this.props is: ", this.props);
    if (loading) return <div>Loading...</div>;
    return <div>{this.renderSongs()}</div>;
  }
}

const query = gql`
  {
    songs {
      title
    }
  }
`;

export default graphql(query)(SongList);

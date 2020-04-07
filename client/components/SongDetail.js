import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";

import fetchSong from "../queries/fetchSong";

import LyricCreate from "./LyricCreate";
import LyricList from "./LyricList";

class SongDetail extends Component {
  render() {
    const { song } = this.props.data;
    if (!song) {
      return <div>Loading...</div>;
    }
    console.log("Songs Detail props is: ", this.props);
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>{song.title}</h3>
        <LyricList lyrics={song.lyrics} />
        <LyricCreate songId={this.props.params.id} />
      </div>
    );
  }
}

export default graphql(fetchSong, {
  // this is used to grab query params from URL & pass down
  // to GraphQL query as params id
  options: (props) => {
    return { variables: { id: props.params.id } };
  },
})(SongDetail);

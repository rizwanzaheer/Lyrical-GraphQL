import React, { Component } from "react";
import { graphql } from "react-apollo";

import fetchSong from "../queries/fetchSong";

class SongDetail extends Component {
  render() {
    console.log("Songs Detail props is: ", this.props);
    return (
      <div>
        <h3>Song Detail</h3>
      </div>
    );
  }
}

export default graphql(fetchSong, {
  // this is used to grab query params from URL & pass down
  // to GraphQL query as params id
  options: props => {
    return { variables: { id: props.params.id } };
  }
})(SongDetail);

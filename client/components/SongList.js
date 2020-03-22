import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
class SongList extends Component {
  renderSongs() {
    return this.props.data.songs.map(({ title, id }) => {
      return (
        <li key={id} className="collection-item">
          {title}
        </li>
      );
    });
  }
  render() {
    const { loading } = this.props.data;
    console.log("this.props is: ", this.props);
    if (loading) return <div>Loading...</div>;
    return <ul className="collection">{this.renderSongs()}</ul>;
  }
}

const query = gql`
  {
    songs {
      title
      id
    }
  }
`;

export default graphql(query)(SongList);

import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link } from "react-router";

class SongList extends Component {
  renderSongs() {
    return this.props.data.songs.map(({ title, id }) => {
      return (
        <li className="collection-item" key={id}>
          {title}
        </li>
      );
    });
  }
  render() {
    const { loading } = this.props.data;
    console.log("this.props is: ", this.props);
    if (loading) return <div>Loading...</div>;
    return (
      <div>
        <ul className="collection">{this.renderSongs()}</ul>
        <Link to="/songs/new" className={"btn-floating btn-large red right"}>
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
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

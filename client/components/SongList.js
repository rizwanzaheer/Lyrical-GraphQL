import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";

// queries
import query from "../queries/fetchSongs";
import gql from "graphql-tag";

class SongList extends Component {
  onSongDelete(id) {
    console.log("onSongDelete id is:", id);
    this.props
      .mutate({
        variables: {
          id
        }
      })
      .then(() => {
        this.props.data.refetch();
      })
      .catch(e => console.log("on song delete error is: ", e));
  }
  renderSongs() {
    return this.props.data.songs.map(({ title, id }) => {
      return (
        <li className="collection-item" key={id}>
          {title}
          <i className="material-icons" onClick={() => this.onSongDelete(id)}>
            delete
          </i>
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

const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;

export default graphql(mutation)(graphql(query)(SongList));

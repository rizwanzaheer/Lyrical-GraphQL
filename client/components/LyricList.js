import React, { Component } from "react";

class LyricList extends Component {
  onLike(id) {
    console.log("onLike id is: ", id);
  }
  renderLyrics() {
    return this.props.lyrics.map(({ id, content }) => {
      return (
        <li key={id} className=" collection-item">
          {content}
          <i className="material-icons" onClick={() => this.onLike(id)}>
            thumb_up
          </i>
        </li>
      );
    });
  }
  render() {
    return (
      <div>
        <ul className="collection">{this.renderLyrics()}</ul>
      </div>
    );
  }
}

export default LyricList;

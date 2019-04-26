import React, { Component } from "react";
import PropTypes from "prop-types";

class ListUsers extends Component {
  static propTypes = {
    users: PropTypes.array.isRequired,
    showGamesCount: PropTypes.bool.isRequired
  };

  render() {
    return (
      <ul>
        {this.props.users.map(user => (
          <li key={user.username}>
            {user.username} played{" "}
            {this.props.showGamesCount ? user.gameCount : "*"} games
          </li>
        ))}
      </ul>
    );
  }
}

export default ListUsers;

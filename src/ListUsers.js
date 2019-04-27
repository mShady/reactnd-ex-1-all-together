import React, { Component } from "react";
import PropTypes from "prop-types";

class ListUsers extends Component {
  static propTypes = {
    users: PropTypes.array.isRequired,
    isGamesCountVisible: PropTypes.bool.isRequired
  };

  render() {
    return (
      <ul>
        {this.props.users.map(user => (
          <li key={user.username}>
            {user.username} played{" "}
            {this.props.isGamesCountVisible ? user.gameCount : "*"} games
          </li>
        ))}
      </ul>
    );
  }
}

export default ListUsers;

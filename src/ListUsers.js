import React, { Component } from "react";
import PropTypes from "prop-types";

class ListUsers extends Component {
  constructor(props) {
    super(props);
    this.state = { isGamesCountVisible: false };
  }

  static propTypes = {
    users: PropTypes.array.isRequired
  };

  toggleGamesCountVisibility() {
    this.setState(currentState => ({
      isGamesCountVisible: !currentState.isGamesCountVisible
    }));
  }

  render() {
    return (
      <div>
        {this.props.users.length > 0 ? (
          <button onClick={() => this.toggleGamesCountVisibility()}>
            {this.state.isGamesCountVisible
              ? "Hide the Number of Games Played"
              : "Show the Number of Games Played"}
          </button>
        ) : (
          ""
        )}

        <ul>
          {this.props.users.map(user => (
            <li key={user.username}>
              {user.username} played{" "}
              {this.state.isGamesCountVisible ? user.gameCount : "*"} games
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ListUsers;

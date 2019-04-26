import React, { Component } from "react";
import PropTypes from "prop-types";

class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newUser: {
        firstName: "",
        lastName: "",
        username: ""
      }
    };
  }

  static propTypes = {
    users: PropTypes.array.isRequired,
    onAddUser: PropTypes.func.isRequired
  };

  isDuplicateUserErrorShown() {
    const { username } = this.state.newUser;
    return this.userAlreadyExists(username);
  }

  userAlreadyExists(username) {
    return (
      this.props.users.filter(
        user => user.username.toUpperCase() === username.toUpperCase()
      ).length > 0
    );
  }

  isAddButtonDisabled() {
    const { firstName, lastName, username } = this.state.newUser;
    if (this.isDuplicateUserErrorShown()) return true;
    if (firstName === "" || lastName === "" || username === "") {
      return true;
    }
    return false;
  }

  addUser() {
    this.props.onAddUser({ ...this.state.newUser, gameCount: 0 });
    this.setState({
      newUser: {
        firstName: "",
        lastName: "",
        username: ""
      }
    });
  }

  onChange(event) {
    const { id, value } = event.target;
    console.log(value);
    console.log(id);
    this.setState(currentState => ({
      newUser: { ...currentState.newUser, [id]: value }
    }));
  }

  render() {
    return (
      <div>
        <input
          id="firstName"
          type="text"
          placeholder="First Name"
          value={this.state.newUser.firstName}
          onChange={event => this.onChange(event)}
        />
        <input
          id="lastName"
          type="text"
          placeholder="Last Name"
          value={this.state.newUser.lastName}
          onChange={event => this.onChange(event)}
        />
        <input
          id="username"
          type="text"
          placeholder="Username"
          value={this.state.newUser.username}
          onChange={event => this.onChange(event)}
        />
        <button
          disabled={this.isAddButtonDisabled()}
          onClick={() => this.addUser()}
        >
          Add
        </button>
        {this.isDuplicateUserErrorShown() ? (
          <p className="error">Error: Duplicate username!</p>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default CreateUser;

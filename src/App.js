import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CreateUser from "./CreateUser";
import ListUsers from "./ListUsers";

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [], isGamesCountVisible: false };
  }
  addUser(newUser) {
    this.setState(currentState => ({
      users: [...currentState.users, newUser]
    }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <CreateUser
          onAddUser={newUser => this.addUser(newUser)}
          users={this.state.users}
        />
        <ListUsers
          users={this.state.users}
          isGamesCountVisible={this.state.isGamesCountVisible}
        />
      </div>
    );
  }
}

export default App;

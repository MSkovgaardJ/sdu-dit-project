import React, { Component } from "react";
import "../LoginPage.css";
import authServices from '../../../services/authServices';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


export default class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = { userName: "", password: "", errorMsg: "", isSuccesfull: true };
  }
  onUserNameInput = event => {
    this.setState({ userName: event.target.value });
  };
  onPasswordInput = event => {
    this.setState({ password: event.target.value });
  };

  onCreate = async () => {
    if (this.state.userName.length < 1 || this.state.password.length < 1) {
      console.log("error msg");
    } else {
      let data = {
        userName: this.state.userName,
        password: this.state.password
      }
      await authServices.createUser(data);
      this.setState({ userName: "", password: "" });
    }
  };
  render() {
    return (
      <div className="postContext">
        <div className="postCreateContainer">
          <div className="postCreateTitle">Create a user here!</div>
          <div className="contentInputContainer">
            <TextField
              className="loginInput"
              label="User name"
              onChange={event => this.onUserNameInput(event)}
              value={this.state.userName}
            />
          </div>
          <div className="contentInputContainer">
            <TextField
              className="loginInput"
              onChange={event => this.onPasswordInput(event)}
              type="password"
              label="Password"
              value={this.state.password}
            />
          </div>

          <Button onClick={this.onCreate} variant="contained">
            Create user
          </Button>
        </div>
      </div>
    );
  }
}

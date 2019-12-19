import React, { Component } from "react";
import "./LoginPage.css";
import authServices from '../../services/authServices';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom';
export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = { userName: "", password: "", accessToken: "", currentUser:"", errorMsg: "", isSuccesfull: true };
  }
  onUserNameInput = event => {
    this.setState({ userName: event.target.value });
  };
  onPasswordInput = event => {
    this.setState({ password: event.target.value });
  };

  onLogin = async () => {
    if (this.state.userName.length < 1 || this.state.password.length < 1) {
      console.log("error msg");
    } else {
      let data = {
        userName: this.state.userName,
        password: this.state.password
      }
    let AT = await authServices.login(data);
    this.setState({ userName: "", password: "", accessToken: AT.accessToken });
    sessionStorage.setItem('currentUser', this.state.accessToken);
    this.loginSucess();
    }
  };
  loginSucess(){
    return alert('Login sucess')
    }
  
  onGetUser = async () => {
    let res = await authServices.getUsers();
    console.log(res)
    this.setState({ users: res });
  }
  render() {
    return (
      <div className="postContext">
        <div className="postCreateContainer">
          <div className="postCreateTitle">Login here!</div>
          <div className="contentInputContainer">
            <TextField
              className="loginInput"
              label="User name"
              onChange={event => this.onUserNameInput(event)}
              value={this.state.userName}
            ></TextField>
          </div>
          <div className="contentInputContainer">
            <TextField
              className="loginInput"
              onChange={event => this.onPasswordInput(event)}
              type="password"
              label="Password"
              value={this.state.password}
            ></TextField>
          </div>

          <Button onClick={this.onLogin} variant="contained">
            Login
          </Button>
          <h4>If you don't have a user yet</h4>
        <Link to='/CreateUser'>
            <Button variant="contained">
                Create User
            </Button>
        </Link>
        </div>
      </div>
    );
  }
}

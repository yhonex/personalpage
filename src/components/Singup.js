import axios from "axios";
import React, { Component } from "react";
import { Redirect } from "react-router";
import { NavLink } from "react-router-dom";
import "../assets/css/Ulogin.css";
import Global from "../Global";

export default class Signup extends Component {
  url = Global.url;
  state = {
    form: {
      username: "",
      email: "",
      password: "",
    },
    status: null,
  };

  handleSignup = async (e) => {
    e.preventDefault();
    const data = {
      username: this.username,
      email: this.email,
      password: this.password,
    };

    axios
      .post(this.url + "/auth/signup", data)
      .then((res) => {
        this.setState({
          status: "auth",
        });
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    if (this.state.status === "success") {
      return <Redirect to="/login" />;
    }
    return (
      <div className="Back-login">
        <div className="wrapper fadeInDown">
          <div id="formContent">
            <div className="fadeIn first">
              <h1 className="intro-login">Registro</h1>
            </div>

            <form onSubmit={this.handleSignup}>
              <input
                type="text"
                id="username"
                className="fadeIn second"
                name="username"
                placeholder="User Name"
                onChange={(e) => (this.username = e.target.value)}
              />
              <input
                type="text"
                id="login"
                className="fadeIn second"
                name="login"
                placeholder="login"
                onChange={(e) => (this.email = e.target.value)}
              />
              <input
                type="password"
                id="password"
                className="fadeIn third"
                name="password"
                placeholder="password"
                onChange={(e) => (this.password = e.target.value)}
              />
              <input type="submit" className="fadeIn fourth" value="Log In" />
            </form>
            <div id="formFooter">
              <NavLink className="underlineHover" to="/login">
                volver al login.
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

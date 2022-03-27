import axios from "axios";
import React, { Component } from "react";
import "../assets/css/Ulogin.css";
import Global from "../Global";
import { NavLink, Redirect } from "react-router-dom";
import SimpleReactValidator from "simple-react-validator";

export default class Ulogin extends Component {
  url = Global.url;
  state = {
    form: {
      email: "",
      password: "",
    },
    status: null,
  };

  constructor() {
    super();
    this.validator = new SimpleReactValidator();
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: this.email,
      password: this.password,
    };

    axios
      .post(this.url + "/auth/signin", data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        this.setState({
          status: "Auth",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    if (this.state.status === "Auth") {
      return <Redirect to="/home" />;
    }
    return (
      <div className="Back-login">
        <div className="wrapper fadeInDown">
          <div id="formContent">
            <div className="fadeIn first">
              <h1 className="intro-login">Bienvenidos a mi pagina</h1>
              <h3 className="sub-intro">Logeate para continuar:</h3>
            </div>

            <form onSubmit={this.handleSubmit}>
              <div>
                <input
                  type="text"
                  id="login"
                  className="fadeIn second"
                  name="login"
                  placeholder="login"
                  onChange={(e) => (this.email = e.target.value)}
                />
              </div>
              <div>
                <input
                  type="password"
                  id="password"
                  className="fadeIn third"
                  name="password"
                  placeholder="password"
                  onChange={(e) => (this.password = e.target.value)}
                />
              </div>
              <input type="submit" className="fadeIn fourth" value="Log In" />
            </form>

            <div id="formFooter">
              <NavLink className="underlineHover" to="/registro">
                Registrarse.
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import { Redirect } from "react-router";

import Global from "../Global";

import Slider from "./Slider";
export default class Home extends Component {
  url = Global.url;

  render() {
    /* if (!localStorage.getItem("token")) {
      return <Redirect to="/login" />;
    }*/
    return (
      <div>
        <Slider />
      </div>
    );
  }
}

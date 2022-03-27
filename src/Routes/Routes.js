import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Signup from "../components/Singup";
import Ulogin from "../components/Ulogin";
//import Slider from "../components/Slider";
import Pcontex from "../components/Pcontex";
//import Home from "../components/Home";
import Footer from "../components/Footer";
import Content from "../components/Content";

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Content} />
          <Route exact path="/login" component={Ulogin} />
          <Route exact path="/registro" component={Signup} />
          <Route exact path="/home" component={Content} />
          <Route exact path="/Pcontex" component={Pcontex} />
        </Switch>
        <div className="clearfix"></div>
        <Footer />
      </BrowserRouter>
    );
  }
}

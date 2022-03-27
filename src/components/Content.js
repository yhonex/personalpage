import React, { Component } from "react";
import "../assets/css/Content.css";
import { Link, animateScroll as scroll } from "react-scroll";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from "reactstrap";

import Slider from "./Slider";

import jsgif from "../assets/images/gif/js.gif";
import html5 from "../assets/images/gif/html5.gif";
import boostrap from "../assets/images/gif/boostrap.gif";
import github3 from "../assets/images/gif/github3.gif";
import ux from "../assets/images/gif/ux.gif";
import css from "../assets/images/gif/css.gif";
import mongodb from "../assets/images/gif/mongodb.gif";
import node from "../assets/images/gif/node.gif";
import php from "../assets/images/gif/php.gif";
import vue from "../assets/images/gif/vue.png";
import logor from "../assets/images/logor.svg";
import angular from "../assets/images/gif/angular.svg";
import code from "../assets/images/code1.png";
import face from "../assets/images/facebook_icon1.png";
import github from "../assets/images/github_git.png";
import linkedin from "../assets/images/linkedin.png";

export default class Content extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  onClickUp = () => {
    scroll.scrollToTop();
  };
  render() {
    return (
      <div>
        <Slider />
        <Navbar expand="md" id="st0" sticky="top" light className="nav-b">
          <img src={code} alt="code" className="codeimg" />
          <NavbarBrand className="text-nav1">Mis Conocimientos</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mx-auto " navbar>
              <NavItem>
                <NavLink href="https://drive.google.com/file/d/1ZKlvROSz_Zk4HF1mmP3Tu0At-kGLazXJ/view?usp=sharing" className="text-nav">
                  Curriculum
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://github.com/yhonex"
                  className="text-nav"
                  target="_blank"
                >
                  GitHub
                </NavLink>
              </NavItem>
            </Nav>
            <Button
              color="primary"
              size="sm"
              className="mx-auto"
              onClick={this.onClickUp}
            >
              subir
            </Button>
          </Collapse>
        </Navbar>
        <div className="content-pllx" id="st1">
          <div>
            <h2 className="cont-text">
              En la siguiente pagina podra ver mis conocimientos en los difentes
              ambitos de la programación web
            </h2>
          </div>
        </div>

        <section className="text-pllx">
          <div className="bg-6">
            <div className="glitch" data-text="Frontend">
              Frontend
            </div>
          </div>
        </section>
        <section className="small-pllx">
          <div className="pllx-gif">
            <img src={jsgif} className="imgif" alt="jsgif" />
            <img src={css} className="imgif" alt="css" />
            <img src={html5} className="imgif" alt="html5" />
            <img src={boostrap} className="imgif" alt="boostrap" />

            <img src={ux} className="imgif" alt="ux" />
          </div>
        </section>
        <section className="text-pllx">
          <div className="bg-6">
            <div className="glitch ajust" data-text="Frameworks">
              Frameworks
            </div>
          </div>
        </section>
        <section className="small-pllx3">
          <div className="pllx-gif">
            <div className="logov">
              <img src={vue} className="imgif " alt="vue" />
            </div>
            <div className="logor">
              <img src={logor} className="imgif App-logor" alt="logor" />
            </div>
            <div className="logov">
              <img src={angular} className="imgif " alt="angular" />
            </div>
          </div>
        </section>
        <section className="text-pllx">
          <div className="bg-6">
            <div className="glitch" data-text="Backend">
              Backend
            </div>
          </div>
        </section>
        <section className="small-pllx2">
          <div className="pllx-gif">
            <img src={node} className="imgif" alt="node" />
            <img src={mongodb} className="imgif" alt="mongodb" />
            <img src={php} className="imgif" alt="php" />
            <img src={github3} className="imgif" alt="github3" />
          </div>
        </section>
        <section className="text-pllx">
          <div className="bg-6">
            <div className="glitch" data-text="Contactos">
              Contactos
            </div>
          </div>
        </section>
        <section className="content-pllx2" id="st4">
          <div>
            <h2 className="cont-text">
              Podes contactarme en las siguientes redes sociales:
            </h2>
          </div>
          <div className="Contat-icon">
            <NavLink href="https://www.facebook.com/berserkert" target="_blank">
              <img src={face} classNam="icon-img" alt="face" />
            </NavLink>
            <NavLink href="https://github.com/yhonex" target="_blank">
              <img src={github} classNam="icon-img" alt="github" />
            </NavLink>
            <NavLink
              href="https://www.linkedin.com/in/diego-urbina-2a0742203/"
              target="_blank"
            >
              <img src={linkedin} classNam="icon-img" alt="linkedin" />
            </NavLink>
          </div>
        </section>
      </div>
    );
  }
}

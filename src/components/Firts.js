import React, { Component } from "react";
import "../assets/css/Content.css";
import "../assets/css/Slider.css";
import { animateScroll as scroll } from "react-scroll";
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
import Footer from "./Footer";

import jsgif from "../assets/images/gif/js.gif";
import html5 from "../assets/images/gif/html5.gif";
import boostrap from "../assets/images/gif/boostrap.gif";

import ux from "../assets/images/gif/ux.gif";
import css from "../assets/images/gif/css.gif";

import vue from "../assets/images/gif/vue.png";
import logor from "../assets/images/logor.svg";
import angular from "../assets/images/gif/angular.svg";
import next from "../assets/images/gif/next.svg";
import code from "../assets/images/code1.png";
import face from "../assets/images/facebook_icon1.png";
import github from "../assets/images/github_git.png";
import linkedin from "../assets/images/linkedin.png";

export default class Firts extends Component {
  componentDidMount() {
    const slides = document.querySelector(".slider").children;
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");

    let index = 0;

    prev.addEventListener("click", function () {
      prevSlide();

      resetTimer();
    });

    next.addEventListener("click", function () {
      nextSlide();

      resetTimer();
    });

    function prevSlide() {
      if (index === 0) {
        index = slides.length - 1;
      } else {
        index--;
      }
      changeSlide();
    }

    function nextSlide() {
      if (index === slides.length - 1) {
        index = 0;
      } else {
        index++;
      }
      changeSlide();
    }

    function changeSlide() {
      for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
      }

      slides[index].classList.add("active");
    }

    function resetTimer() {
      // when click to indicator or controls button
      // stop timer
      clearInterval(timer);
      // then started again timer
      timer = setInterval(autoPlay, 8000);
    }

    function autoPlay() {
      nextSlide();
    }

    let timer = setInterval(autoPlay, 8000);
  }
  onClickDown = () => {
    scroll.scrollToBottom();
  };
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      Empezar: true,
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
  btn1 = () => {
    this.setState({
      Empezar: false,
    });
  };
  render() {
    return (
      <>
        <div>
          {this.state.Empezar ? (
            <section className="home" id="sl0">
              <div className="slider ">
                <div className="slide slide-1 active">
                  <div className="container">
                    <div className="caption">
                      <h1>Bienvenido</h1>
                      <p>A mi pagina personal</p>

                      <a href="#" onClick={this.btn1}>
                        Empezar
                      </a>
                    </div>
                  </div>
                </div>
                <div className="slide slide-2">
                  <div className="container">
                    <div className="caption">
                      <h1>Curriculum</h1>
                      <p>Dale click para descargar mi CV </p>
                      <a
                        href="https://drive.google.com/uc?export=download&id=1oetZ9EEJbMBPGLEAHhFURl0kZTG_AjyM"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Descargar
                      </a>
                    </div>
                  </div>
                </div>
                <div className="slide slide-3">
                  <div className="container">
                    <div className="caption">
                      <h1>GitHub</h1>
                      <p>Dale click para ir a mi GitHub</p>
                      <a
                        href="https://github.com/yhonex"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Ir a GitHub
                      </a>
                    </div>
                  </div>
                </div>
                <div className="slide slide-4">
                  <div className="container">
                    <div className="caption">
                      <h1>Contacto</h1>
                      <p>Te llevara a al area de contacto y redes sociales</p>
                      <a href="#" onClick={this.onClickDown}>
                        Contactame
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="controls">
                <div className="prev">{"◄"}</div>
                <div className="next">{"►"} </div>
              </div>
            </section>
          ) : (
            <>
              <Slider />
              <Navbar expand="md" id="st0" sticky="top" light className="nav-b">
                <img src={code} alt="code" className="codeimg" />
                <NavbarBrand className="text-nav1">Mi pagina</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="mx-auto " navbar>
                    <NavItem>
                      <NavLink
                        href="https://drive.google.com/file/d/1oetZ9EEJbMBPGLEAHhFURl0kZTG_AjyM/view?usp=share_link"
                        className="text-nav"
                        target="_blank"
                      >
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
                    <NavItem>
                      <NavLink
                        href="https://gallery-vue.herokuapp.com"
                        className="text-nav"
                        target="_blank"
                      >
                        Galeria
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        href="https://yhonex.github.io/CryptoDashboard/"
                        className="text-nav"
                        target="_blank"
                      >
                        Crypto-Dashboard
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
                <div className="test1">
                  <h2 className="cont-text">
                    Seas Bienvenido a mi pagina personal : Me presento soy Diego
                    tengo 28 años originario de venezuela , actualmente vivo En
                    Buenos Aires Argentina, poseo un año de experiencia como
                    frontend aqui presento las tecnologias que manejo ⇩
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
                    <img src={next} className="imgif " alt="next" />
                  </div>
                  <div className="logor">
                    <img src={logor} className="imgif App-logor" alt="logor" />
                  </div>

                  <div className="logov">
                    <img src={vue} className="imgif " alt="vue" />
                  </div>
                </div>
              </section>
              <section className="text-pllx">
                <div className="bg-6">
                  <div className="glitch" data-text="Experiencia">
                    Experiencia
                  </div>
                </div>
              </section>
              <section className="content-pllx3">
                <div className="test12">
                  <h2 className="cont-text">
                    Si llegaste hasta aca te estaras preguntando cual es mi
                    experiencia laboral:
                    <br /> trabaje un año para Netracker S.A Como desarrollador
                    Front (02/2021 - 03/2022) y <br /> 7 meses para Atua Rental
                    (04/2022 - 10/2022) como freelancer Frontend.
                    <br />
                    Si deseas contactarme sigue bajando ⇩
                  </h2>
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
                <div className="test1">
                  <h2 className="cont-text">
                    Podes contactarme en las siguientes redes sociales:
                  </h2>
                  <div className="Contat-icon">
                    <NavLink
                      href="https://www.facebook.com/berserkert"
                      target="_blank"
                    >
                      <img src={face} className="icon-img" alt="face" />
                    </NavLink>
                    <NavLink href="https://github.com/yhonex" target="_blank">
                      <img src={github} className="icon-img" alt="github" />
                    </NavLink>
                    <NavLink
                      href="https://www.linkedin.com/in/diego-urbina-2a0742203/"
                      target="_blank"
                    >
                      <img src={linkedin} className="icon-img" alt="linkedin" />
                    </NavLink>
                  </div>
                </div>
              </section>
            </>
          )}
        </div>
        <Footer />
      </>
    );
  }
}


import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "../assets/css/Slider.css";

class Slider extends Component {
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

  render() {
    return (
      <section className="home" id="sl0">
        <div className="slider ">
          <div className="slide slide-1 active">
            <div className="container">
              <div className="caption">
                <h1>Bienvenido</h1>
                <p>A mi pagina personal</p>
                <p>Dale Click para iniciar el recorrido</p>
                <Link
                  activeClass="active"
                  to="st4"
                  spy={true}
                  smooth='linear'
                  offset={-70}
                  duration={19000}
                >
                  Empezar
                </Link>
              </div>
            </div>
          </div>
          <div className="slide slide-2">
            <div className="container">
              <div className="caption">
                <h1>Curriculum</h1>
                <p>Dale click para descargar mi CV </p>
                <a href="https://drive.google.com/uc?export=download&id=18pOU7eCDg5I0V53QI9N8-A6f9iRxSQU7" target="_blank" rel="noreferrer">Descargar</a>
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
    );
  }
}

export default Slider;

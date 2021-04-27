/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import { Parallax, Background } from "react-parallax";
import Particles from "react-particles-js";
var ReactRotatingText = require("react-rotating-text");

function Banner() {
  return (
    <Parallax strength={500}>
      <Background className="custom-bg">
        <div
          style={{
            height: 2000,
            width: 2000,
            background: "linear-gradient(90deg, #78b893, #193023)",
          }}
        />
      </Background>
      <div className="min-h-screen h-screen flex">
        <div className="w-4/5 max-w-full box-border flex relative justify-around flex-row h-full mt-4 mb-0 mr-0 ml-1/10 z-10 -top-14">
          <div className="flex text-2xl text-white justify-center items-center">
            <div className="float-left">
              <h1
                style={{ color: "white" }}
                className="text-4xl mb-12 text-left"
              >
                Hi, my name is <span className="text-color-main">Bloggy.</span>
                <br />
                I'm the{" "}
                <ReactRotatingText items={["Blog", "Test", "Example"]} />
              </h1>
            </div>
          </div>
          <a className="content-particles-container" href="/blogs">
            <Particles
              className="content-particles"
              params={{
                fps_limit: 28,
                particles: {
                  collisions: {
                    enable: false,
                  },
                  number: {
                    value: 200,
                    density: {
                      enable: false,
                    },
                  },
                  line_linked: {
                    enable: true,
                    distance: 30,
                    opacity: 0.4,
                  },
                  move: {
                    speed: 1,
                  },
                  opacity: {
                    anim: {
                      enable: true,
                      opacity_min: 0.05,
                      speed: 1,
                      sync: false,
                    },
                    value: 0.4,
                  },
                },
                polygon: {
                  enable: true,
                  scale: 0.5,
                  type: "inline",
                  move: {
                    radius: 10,
                  },
                  url:
                    "https://cdn.matteobruni.it/images/particles/smalldeer.svg",
                  inline: {
                    arrangement: "equidistant",
                  },
                  draw: {
                    enable: true,
                    stroke: {
                      color: "rgba(255, 255, 255, .2)",
                    },
                  },
                },
                retina_detect: false,
                interactivity: {
                  events: {
                    onhover: {
                      enable: true,
                      mode: "bubble",
                    },
                  },
                  modes: {
                    bubble: {
                      size: 6,
                      distance: 40,
                    },
                  },
                },
              }}
            />
          </a>
        </div>
      </div>
    </Parallax>
  );
}

export default Banner;

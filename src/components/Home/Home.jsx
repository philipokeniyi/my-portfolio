import React from "react";
import "./home.css";
import Starfield from "./Starfield";
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNode,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import aws from "../../assets/icons/aws.png";
import css from "../../assets/icons/css3.png";
import git from "../../assets/icons/git.png";
import html from "../../assets/icons/html.png";
import js from "../../assets/icons/javascript.png";
import node from "../../assets/icons/node-js.png";
import react from "../../assets/icons/react.png";
import tailwind from "../../assets/icons/tailwind-css.png";
import ts from "../../assets/icons/typescript.png";
import mysql from "../../assets/icons/mysql.png";
import mongo from "../../assets/icons/mongodb.png";
import express from "../../assets/icons/express.png";
import postgres from "../../assets/icons/postgresql.png";
import bootstrap from "../../assets/icons/bootstrap.png";
import sass from "../../assets/icons/sass.png";
import django from "../../assets/icons/django.png";
import python from "../../assets/icons/python.png";
import docker from "../../assets/icons/docker.png";

import PhilipImage from "../../assets/philip1.jpg";
import { NavLink } from "react-router";

function Home() {
  return (
    <div className="home-container">
      <section className="home">
        <section className="home-left">
          <h1 className="my-name">
            <span>Hi,</span> <span>I'm Philip Okeniyi,</span>{" "}
            <span>Web developer.</span>
          </h1>
          <p>Freelancer / Full-Stack Developer / JavaScript Expert</p>
          <p>
            I’m a full-stack web developer with a passion for creating seamless
            user experiences and solving complex problem. With my experience in
            web development, I have completed various projects ranging from
            small business websites to large-scale applications.
          </p>
          <button>
            <NavLink to="/contact" className="">
              Contact Me
            </NavLink>
          </button>
        </section>

        <section className="home-right">
          <Starfield />
          <div className="home-cube">
            <div className="stage-cube-cont">
              <div className="cubespinner">
                <div className="face6">
                  <FontAwesomeIcon icon={faNode} color="#ccf8d7" />
                </div>
                <div className="face5">
                  <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                </div>
                <div className="face2">
                  <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                </div>
                <div className="face3">
                  <FontAwesomeIcon icon={faCss3} color="#05b4ff" />
                </div>
                <div className="face4">
                  <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                </div>
                <div className="face1">
                  <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="about-container">
        <h2>ABOUT ME</h2>

        <div className="about">
          <section className="about-image">
            <p>
              <img src={PhilipImage} alt="" />
            </p>
            <p>
              Hello! I'm Philip, a passionate full-stack web developer with a
              strong focus on JavaScript. From the moment I wrote my first line
              of code, I knew that building web applications was what I wanted
              to do. Over the years, I have worked on various projects that
              leverage JavaScript, from dynamic front-end interfaces to scalable
              back-end solutions. Whether it's crafting interactive UI
              components with React, developing robust APIs using Node.js and
              Express, or optimizing database interactions with MongoDB and
              PostgreSQL, I thrive on solving complex problems through code.
            </p>
            <p>
              My journey in web development has been fueled by curiosity and a
              desire to create seamless, user-friendly applications. I have
              built everything from small business websites to full-fledged web
              applications, always ensuring performance, accessibility, and
              scalability. I enjoy exploring the latest JavaScript frameworks
              and tools, continuously improving my skills to stay ahead in this
              fast-evolving industry.
            </p>
            <p>
              Beyond coding, I love collaborating with teams, brainstorming
              innovative solutions, and turning ideas into reality. Whether
              working independently or as part of a development team, I bring a
              problem-solving mindset and a dedication to clean, maintainable
              code. My goal is to build applications that not only function
              efficiently but also provide a great user experience. If you’re
              looking for someone who is deeply invested in JavaScript and
              full-stack development, let’s connect!
            </p>
          </section>
        </div>
      </section>

      <section className="skills-container">
        <h2>SKILLS</h2>

        <div className="skills">
          <p>
            <span>
              <img src={html} alt="html" /> HTML
            </span>
            <span>
              <img src={css} alt="css" /> CSS
            </span>
            <span>
              <img src={js} alt="JavaScript" /> JavaScript
            </span>
            <span>
              <img src={react} alt="react" /> React
            </span>
            <span>
              <img src={tailwind} alt="tailwind" /> Tailwind
            </span>
            <span>
              <img src={ts} alt="typescript" /> TypeScript
            </span>
            <span>
              <img src={git} alt="git" /> Git
            </span>
            <span>
              <img src={mysql} alt="mysql" /> MySQL
            </span>
            <span>
              <img src={express} alt="express" /> Express
            </span>
            <span>
              <img src={bootstrap} alt="bootstrap" /> Bootstrap
            </span>
            <span>
              <img src={sass} alt="sass" /> Sass
            </span>
            <span>
              <img src={node} alt="node" /> Node
            </span>
            <span>
              <img src={mongo} alt="mongo" /> MongoDB
            </span>
            <span>
              <img src={python} alt="python" /> Python
            </span>
            <span>
              <img src={postgres} alt="postgres" /> PostgreSQL
            </span>
            <span>
              <img src={docker} alt="docker" /> Docker
            </span>
            <span>
              <img src={django} alt="django" /> Django
            </span>
            <span>
              <img src={aws} alt="aws" /> AWS
            </span>
          </p>
        </div>
      </section>

      <section className="experience">
        <h2>Experience</h2>
        <section className="exp-cert">
          <p>Software Developer at coming soon (2025-Present)</p>
          <p>Freelance Web Developer (2023-Present)</p>
        </section>

        <h2>Education & Certifications</h2>
        <section className="exp-cert">
          <p>Physics - Covenant University</p>
          <p>
            JavaScript Algorithms and Data Structures Certification -
            FreeCodeCamp
          </p>
        </section>
      </section>
    </div>
  );
}

export default Home;

// 3

import "./work.css";
import Card from "../Work Card/Card";
import fashionWebsite from "./fashion-website.png";
import realEstate from "./estate-agency.png";
import loginAuth from "./Login-Auth.png";
import { Helmet } from "react-helmet";

function Work() {
  return (
    <div>
      <Helmet>
        <title>Work | Philip Okeniyi</title>
        <meta
          name="description"
          content="View the professional work and projects completed by Philip Okeniyi."
        />
        <meta property="og:title" content="Work | Philip Okeniyi" />
        <meta
          property="og:description"
          content="Browse a portfolio of impactful projects delivered with passion and precision."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="work-container">
        <div className="all-work">
          <h1>PROJECTS</h1>
          <section className="work">
            <Card
              title="Login Authentication"
              description="App with login, email verification, and password reset features."
              stack="React, Tailwind CSS, Node.js, MongoDB, Express.js "
              link="https://login-authentication-1yfb.vercel.app"
              image={loginAuth}
              alt="Loagin Authentication"
            />

            <Card
              title="Fashion website"
              description="Modern fashion site with stylish design and user interface."
              stack="HTML, Bootstrap, JavaScript"
              link="https://philipokeniyi.github.io/Bootstrap-PFashion/"
              image={fashionWebsite}
              alt="Fashion website"
            />

            <Card
              title="Real Estate Agency"
              description="Real estate platform for property listings and client contact."
              stack="HTML, CSS, JavaScript"
              link="https://real-estate-agency-mocha.vercel.app"
              image={realEstate}
              alt="Real Estate Agency"
            />
          </section>
        </div>
      </div>
    </div>
  );
}

export default Work;

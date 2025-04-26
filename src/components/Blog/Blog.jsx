import React from "react";
import { NavLink } from "react-router";
import clearcodepx from "../Blog-contents/cleanercode.png";
import simpleWebApp from "../Blog-contents/simplewebapp.png";
import JavaScriptFrameworkspx from "../Blog-contents/JavaScriptFrameworks.png";
import AsyncVsSyncpx from "../Blog-contents/asyncVsSyncpx.png";
import FetchAsyncAPIpx from "../Blog-contents/FetchAsyncAPIpx.png";
import { Helmet } from "react-helmet";

function Blog() {
  return (
    <div className="blog-container">
    

      <Helmet>
        <title>Blog | Philip Okeniyi</title>
        <meta
          name="description"
          content="Read articles and insights from Philip Okeniyi about web development, JavaScript, and technology trends."
        />
        <meta property="og:title" content="Blog | Philip Okeniyi" />
        <meta
          property="og:description"
          content="Stay updated with thoughts and tutorials by Philip Okeniyi."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <h1 className="blog">Blog</h1>

      <div className="blog-content">
        <div className="per-blog">
          <div className="blog-image-container">
            <img src={clearcodepx} alt="Cleaner Code" className="blog-image" />
          </div>

          <div className="blog-text-container">
            <h2 className="blog-text-container-title">
              10 Must-Know JavaScript Tricks to Write Cleaner Code
            </h2>
            <p className="blog-text-contents-date">Posted on 29/03/2025</p>

            <NavLink to="/blog/cleaner-code" className="blog-navlink">
              Read more
            </NavLink>
          </div>
        </div>
      </div>

      <div className="blog-content">
        <div className="per-blog">
          <div className="blog-image-container">
            <img src={simpleWebApp} alt="Cleaner Code" className="blog-image" />
          </div>

          <div className="blog-text-container">
            <h2 className="blog-text-container-title">
              How to Build a Simple Web App Using Vanilla JavaScript
            </h2>
            <p className="blog-text-contents-date">Posted on 31/03/2025</p>

            <NavLink to="/blog/simple-web-app" className="blog-navlink">
              Read more
            </NavLink>
          </div>
        </div>
      </div>

      <div className="blog-content">
        <div className="per-blog">
          <div className="blog-image-container">
            <img
              src={JavaScriptFrameworkspx}
              alt="Cleaner Code"
              className="blog-image"
            />
          </div>

          <div className="blog-text-container">
            <h2 className="blog-text-container-title">
              The Ultimate Guide to JavaScript Frameworks: React, Vue, and
              Angular
            </h2>
            <p className="blog-text-contents-date">Posted on 31/03/2025</p>

            <NavLink to="/blog/javascript-frameworks" className="blog-navlink">
              Read more
            </NavLink>
          </div>
        </div>
      </div>

      <div className="blog-content">
        <div className="per-blog">
          <div className="blog-image-container">
            <img
              src={AsyncVsSyncpx}
              alt="Cleaner Code"
              className="blog-image"
            />
          </div>

          <div className="blog-text-container">
            <h2 className="blog-text-container-title">
              Async vs. Sync: Understanding JavaScript’s Event Loop ike a Pro
            </h2>
            <p className="blog-text-contents-date">Posted on 01/04/2025</p>

            <NavLink to="/blog/async-vs-sync" className="blog-navlink">
              Read more
            </NavLink>
          </div>
        </div>
      </div>

      <div className="blog-content">
        <div className="per-blog">
          <div className="blog-image-container">
            <img
              src={FetchAsyncAPIpx}
              alt="Cleaner Code"
              className="blog-image"
            />
          </div>

          <div className="blog-text-container">
            <h2 className="blog-text-container-title">
              How to Use Fetch API and Async/Await for API Calls in JavaScript
            </h2>
            <p className="blog-text-contents-date">Posted on 01/04/2025</p>

            <NavLink to="/blog/fetch-async-api" className="blog-navlink">
              Read more
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;

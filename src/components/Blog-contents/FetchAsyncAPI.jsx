import React from "react";
import "./blog-contents.css";
import FetchAsyncAPIpx from "./FetchAsyncAPIpx.png";

function FetchAsyncAPI() {
  return (
    <section className="blog-contents-container">
      <section className="blog-contents">
        <h2 className="blog-contents-title">
          How to Use Fetch API and Async/Await for API Calls in JavaScript
        </h2>
        <img
          src={FetchAsyncAPIpx}
          alt="Async vs. Sync"
          className="blog-title-image"
        />
        <p className="blog-contents-date">Posted on 01/04/2025</p>

        <h3 className="blog-contents-sub-title">Introductions</h3>
        <p className="blog-contents-introduction">
          JavaScript provides powerful ways to handle HTTP requests, and one of
          the most efficient methods is using the Fetch API combined with
          async/await. This approach simplifies handling API calls, making code
          cleaner and more readable. In this blog, we will explore how to use
          the Fetch API with async/await to retrieve data from APIs efficiently.
        </p>

        <section className="blog-contents-section">
          <p>Understanding the Fetch API</p>
          <p>
            The Fetch API is a modern replacement for XMLHttpRequest and
            provides a simple, flexible way to make network requests. It returns
            a Promise that resolves to the Response object containing the
            server's response.
          </p>

          <p className="blog-contents-section-p-sub">Basic syntax:</p>

          <pre>
            <code>
              <span className="method">fetch</span>(
              <span className="variable">url</span>)
              <br />
              &nbsp;&nbsp;.<span className="method">then</span>(
              <span className="variable">response</span> =&gt;
              <span className="variable">response</span>.
              <span className="method">json</span>())
              <br />
              &nbsp;&nbsp;.<span className="method">then</span>(
              <span className="variable">data</span> =&gt;
              <span className="console">console</span>.
              <span className="method">log</span>(
              <span className="variable">data</span>))
              <br />
              &nbsp;&nbsp;.<span className="method">catch</span>(
              <span className="variable">error</span> =&gt;
              <span className="console">console</span>.
              <span className="method">error</span>(
              <span className="string">"Error:"</span>,
              <span className="variable">error</span>));
            </code>
          </pre>

          <p>
            While this works, chaining multiple .then() calls can make the code
            difficult to read and maintain. This is where async/await comes in
            handy.
          </p>
        </section>

        <section className="blog-contents-section">
          <p>Using Async/Await for API Calls</p>
          <p>
            The async/await syntax allows us to write asynchronous code in a
            synchronous style. Here's how you can use it with Fetch API:
          </p>

          <p className="blog-contents-section-p-sub">
            Example of Asynchronous Code:
          </p>

          <pre>
            <code>
              <span className="keyword">async function</span>
              <span className="function">fetchData</span>(
              <span className="variable">url</span>) &#123;
              <br />
              &nbsp;&nbsp;<span className="keyword">try</span> &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">const</span>
              <span className="variable">response</span> =
              <span className="keyword">await</span>
              <span className="method">fetch</span>(
              <span className="variable">url</span>);
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">if</span>
              (!<span className="variable">response</span>.
              <span className="property">ok</span>) &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span className="keyword">throw new</span>
              <span className="class">Error</span>(
              <span className="string">
                `HTTP error! Status: $&#123;response.status&#125;`
              </span>
              );
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&#125;
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">const</span>
              <span className="variable">data</span> =
              <span className="keyword">await</span>
              <span className="variable">response</span>.
              <span className="method">json</span>();
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="console">console</span>.
              <span className="method">log</span>(
              <span className="variable">data</span>);
              <br />
              &nbsp;&nbsp;&#125; <span className="keyword">catch</span>(
              <span className="variable">error</span>) &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="console">console</span>.
              <span className="method">error</span>(
              <span className="string">"Error fetching data:"</span>,
              <span className="variable">error</span>);
              <br />
              &nbsp;&nbsp;&#125;
              <br />
              &#125;
              <br />
              <br />
              <span className="keyword">const</span>
              <span className="variable">apiUrl</span> =
              <span className="string">
                "https://jsonplaceholder.typicode.com/posts"
              </span>
              ;
              <br />
              <span className="function">fetchData</span>(
              <span className="variable">apiUrl</span>);
            </code>
          </pre>

          <p className="blog-contents-section-p-sub">Explanation:</p>

          <ol className="blog-contents-list">
            <li>
              The fetchData function is declared with async, making it
              asynchronous.
            </li>
            <li>
              await fetch(url): Fetches data from the API and waits for the
              response.
            </li>
            <li>
              We check if the response is OK using response.ok and handle errors
              accordingly.
            </li>
            <li>await response.json(): Parses the JSON response.</li>
            <li>
              The try...catch block handles any errors that might occur during
              the request.
            </li>
          </ol>
        </section>

        <section className="blog-contents-section">
          <p>Handling POST Requests with Fetch API</p>
          <p>
            You can also send data to an API using a POST request. Here’s an
            example:
          </p>

          <pre>
            <code>
              <span className="keyword">async function</span>
              <span className="function"> postData</span>(
              <span className="variable">url</span>,
              <span className="variable">data</span>) &#123;
              <br />
              &nbsp;&nbsp;<span className="keyword">try</span> &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">const</span>
              <span className="variable"> response</span> =
              <span className="keyword"> await</span>
              <span className="method"> fetch</span>(
              <span className="variable">url</span>, &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span className="property">method</span>:
              <span className="string">"POST"</span>,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span className="property">headers</span>: &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span className="string">"Content-Type"</span>:
              <span className="string">"application/json"</span>
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span className="property">body</span>:
              <span className="method">JSON.stringify</span>(
              <span className="variable">data</span>)
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&#125;);
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">if</span>
              (!<span className="variable">response</span>.
              <span className="property">ok</span>) &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span className="keyword">throw new </span>
              <span className="class">Error</span>(
              <span className="string">
                `HTTP error! Status: $&#123;response.status&#125;`
              </span>
              );
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&#125;
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">const</span>
              <span className="variable"> result</span> =
              <span className="keyword"> await</span>
              <span className="variable"> response</span>.
              <span className="method">json</span>();
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="console">console</span>.
              <span className="method">log</span>(
              <span className="string">"Success:"</span>,
              <span className="variable">result</span>);
              <br />
              &nbsp;&nbsp;&#125; <span className="keyword">catch</span>(
              <span className="variable">error</span>) &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="console">console</span>.
              <span className="method">error</span>(
              <span className="string">"Error posting data:"</span>,
              <span className="variable">error</span>);
              <br />
              &nbsp;&nbsp;&#125;
              <br />
              &#125;
              <br />
              <br />
              <span className="keyword">const</span>
              <span className="variable"> newPost</span> = &#123;
              <br />
              &nbsp;&nbsp;<span className="property">title</span>:
              <span className="string">"Async/Await in JavaScript"</span>,
              <br />
              &nbsp;&nbsp;<span className="property">body</span>:
              <span className="string">
                "This blog explains how to use async/await with the Fetch API."
              </span>
              ,
              <br />
              &nbsp;&nbsp;<span className="property">userId</span>:
              <span className="number">1</span>
              <br />
              &#125;;
              <br />
              <br />
              <span className="function">postData</span>(
              <span className="string">
                "https://jsonplaceholder.typicode.com/posts"
              </span>
              ,<span className="variable">newPost</span>);
            </code>
          </pre>
        </section>

        <section className="blog-contents-section">
          <p>Async/Await: The Modern Approach</p>
          <p>
            async/await simplifies working with promises, making asynchronous
            code look synchronous.
          </p>

          <p className="blog-contents-section-p-sub">
            Example with Async/Await:
          </p>

          <pre>
            <code>
              <span className="keyword">async function </span>
              <span className="function">fetchData</span>() &#123;
              <br />
              <span className="console">console</span>.
              <span className="method">log</span>(
              <span className="string">"Fetching data..."</span>);
              <br />
              <br />
              <span className="keyword">let</span>
              <span className="variable"> data</span> =
              <span className="keyword"> await</span>
              <span className="keyword"> new</span>
              <span className="class"> Promise</span>( (
              <span className="variable">resolve</span>) =&gt;
              <span className="method"> setTimeout</span>(() =&gt;
              <span className="variable"> resolve</span>(
              <span className="string">"Data received"</span>),
              <span className="number">2000</span>));
              <br />
              <br />
              <span className="console">console</span>.
              <span className="method">log</span>(
              <span className="variable">data</span>);
              <br />
              &#125;
              <br />
              <br />
              <span className="console">console</span>.
              <span className="method">log</span>(
              <span className="string">"Start"</span>);
              <br />
              <span className="function">fetchData</span>();
              <br />
              <span className="console">console</span>.
              <span className="method">log</span>(
              <span className="string">"End"</span>);
            </code>
          </pre>

          <p className="blog-contents-section-p-sub">Explanation:</p>

          <ol className="blog-contents-list">
            <li>method: 'POST' specifies the request type.</li>
            <li>headers define the content type as JSON.</li>
            <li>
              body: JSON.stringify(data): Converts the JavaScript object to a
              JSON string.
            </li>
            <li>
              The response is processed the same way as in the GET request
              example.
            </li>
          </ol>

          <p className="blog-contents-section-p-sub">
            Benefits of Using Fetch API with Async/Await
          </p>

          <ul className="blog-contents-list">
            <li>
              Improved Readability: The async/await syntax makes the code look
              cleaner and easier to understand.
            </li>
            <li>
              Error Handling: Using try...catch helps manage errors more
              effectively.
            </li>
            <li>
              Better Debugging: Debugging async/await is easier compared to
              promise chaining.
            </li>
          </ul>
        </section>

        <p className="conclusion">
          Using the Fetch API with async/await is a modern and efficient way to
          handle API calls in JavaScript. It makes asynchronous code more
          readable and easier to manage. Whether fetching or posting data, this
          approach improves performance and maintainability.
          <br />
          Start implementing async/await in your JavaScript projects today and
          experience the benefits of cleaner and more efficient API calls!
        </p>
      </section>
    </section>
  );
}

export default FetchAsyncAPI;

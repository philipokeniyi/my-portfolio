import React from "react";
import "./blog-contents.css";
import asyncVsSyncpx from "./asyncVsSyncpx.png";

function AsyncVsSync() {
  return (
    <section className="blog-contents-container">
      <section className="blog-contents">
        <h2 className="blog-contents-title">
          Async vs. Sync: Understanding JavaScript's Event Loop Like a Pro
        </h2>
        <img
          src={asyncVsSyncpx}
          alt="Async vs. Sync"
          className="blog-title-image"
        />
        <p className="blog-contents-date">Posted on 01/04/2025</p>

        <h3 className="blog-contents-sub-title">Introductions</h3>
        <p className="blog-contents-introduction">
          JavaScript is a single-threaded, non-blocking, asynchronous
          programming language. This makes it powerful for handling tasks
          efficiently, but it can also be confusing when working with
          synchronous and asynchronous code. Understanding the event loop is key
          to writing performant JavaScript applications. In this blog, we'll
          break down how JavaScript handles sync and async tasks like a pro.
        </p>

        <section className="blog-contents-section">
          <p>Understanding Synchronous Code</p>
          <p>
            Synchronous (sync) code executes line by line in the order it's
            written. Each operation must complete before the next one
            starts.This is known as blocking code, which means a long-running
            task will prevent other operations from executing until it's done.
          </p>

          <p className="blog-contents-section-p-sub">
            Example of Synchronous Code:
          </p>

          <pre>
            <code>
              <span className="console">console</span>.
              <span className="method">log</span>(
              <span className="string">"Start"</span>);
              <br />
              <br />
              <span className="keyword">for</span>(
              <span className="keyword">let</span>
              <span className="variable">i</span> =
              <span className="number">0</span>;
              <span className="variable">i</span> &lt;
              <span className="number">5</span>;
              <span className="variable">i</span>++) &#123;
              <br />
              <span className="console">console</span>.
              <span className="method">log</span>(
              <span className="variable">i</span>);
              <br />
              &#125;
              <br />
              <br />
              <span className="console">console</span>.
              <span className="method">log</span>(
              <span className="string">"End"</span>);
            </code>
          </pre>

          <p className="blog-contents-section-p-sub">Output:</p>
          <pre>
            <code>
              Start
              <br /> 0
              <br /> 1 <br /> 2 <br /> 3 <br /> 4 <br /> End
            </code>
          </pre>
          <p>
            The execution is straightforward—each statement runs sequentially.
          </p>
        </section>

        <section className="blog-contents-section">
          <p>Understanding Asynchronous Code</p>
          <p>
            Asynchronous (async) code allows JavaScript to handle multiple tasks
            at once without blocking the execution of other code. This is done
            using callbacks, promises, and async/await.
          </p>

          <p className="blog-contents-section-p-sub">
            Example of Asynchronous Code:
          </p>

          <pre>
            <code>
              <span className="console">console</span>.
              <span className="method">log</span>(
              <span className="string">"Start"</span>);
              <br />
              <br />
              <span className="method">setTimeout</span>(() =&gt; &#123;
              <br />
              <span className="console">console</span>.
              <span className="method">log</span>(
              <span className="string">"Async Task Completed"</span>);
              <br />
              &#125;, <span className="number">2000</span>);
              <br />
              <br />
              <span className="console">console</span>.
              <span className="method">log</span>(
              <span className="string">"End"</span>);
            </code>
          </pre>

          <p className="blog-contents-section-p-sub">Output:</p>
          <pre>
            <code>
              Start
              <br />
              End
              <br />
              Async Task Completed
            </code>
          </pre>
          <p>
            Here, setTimeout schedules an operation to run after 2 seconds, but
            instead of blocking execution, JavaScript moves on to the next line.
          </p>
        </section>

        <section className="blog-contents-section">
          <p>The Event Loop: JavaScript's Conductor</p>
          <p>
            The event loop is what enables JavaScript to manage synchronous and
            asynchronous tasks efficiently. It works with the call stack,
            callback queue, and microtask queue to determine what code executes
            next.
          </p>

          <p className="blog-contents-section-p-sub">Event Loop Workflow:</p>

          <ol className="blog-contents-list">
            <li>
              Call Stack: JavaScript executes synchronous code first by pushing
              and popping functions onto the call stack.
            </li>
            <li>
              Web APIs: Async tasks like setTimeout, fetch, or DOM events are
              handled by browser APIs.
            </li>
            <li>
              Callback Queue: Once async tasks complete, their callbacks move to
              the callback queue.
            </li>
            <li>
              Microtask Queue: Higher priority than the callback queue, it
              handles promises (.then() and async/await).
            </li>
            <li>
              Event Loop Execution: The event loop continuously checks if the
              call stack is empty and moves tasks from the queues to the stack
              accordingly.
            </li>
          </ol>
        </section>

        <section className="blog-contents-section">
          <p>Promises and Microtasks</p>
          <p>
            Promises are a modern way to handle asynchronous operations and are
            part of the microtask queue, which has a higher priority than
            regular callbacks.
          </p>

          <p className="blog-contents-section-p-sub">Example with Promises:</p>

          <pre>
            <code>
              <span className="console">console</span>.
              <span className="method">log</span>(
              <span className="string">"Start"</span>);
              <br />
              <br />
              <span className="method">setTimeout</span>(() =&gt; &#123;
              <br />
              <span className="console">console</span>.
              <span className="method">log</span>(
              <span className="string">"setTimeout callback"</span>);
              <br />
              &#125;, <span className="number">0</span>);
              <br />
              <br />
              <span className="method">Promise.resolve</span>().
              <span className="method">then</span>(() =&gt; &#123;
              <br />
              <span className="console">console</span>.
              <span className="method">log</span>(
              <span className="string">"Promise resolved"</span>);
              <br />
              &#125;);
              <br />
              <br />
              <span className="console">console</span>.
              <span className="method">log</span>(
              <span className="string">"End"</span>);
            </code>
          </pre>

          <p className="blog-contents-section-p-sub">Output:</p>
          <pre>
            <code>
              Start
              <br />
              End
              <br />
              Promise resolved
              <br />
              setTimeout callback
            </code>
          </pre>
          <p>
            Even though setTimeout has a 0ms delay, the promise runs first
            because it's in the microtask queue.
          </p>
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
              <span className="keyword">async function</span>
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
              <span className="method">setTimeout</span>(() =&gt;
              <span className="variable">resolve</span>(
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

          <p className="blog-contents-section-p-sub">Output:</p>
          <pre>
            <code>
              Start
              <br />
              Fetching data...
              <br />
              End
              <br />
              Data received
            </code>
          </pre>
          <p>
            The await keyword pauses execution until the promise resolves, but
            it doesn't block the entire script.
          </p>
        </section>
        <p className="conclusion">
          Mastering JavaScript’s event loop, synchronous vs. asynchronous
          execution, and handling async operations with promises and async/await
          will level up your JavaScript skills. By understanding how JavaScript
          manages tasks, you can write more efficient and bug-free applications.
          <br />
          Want to take your JavaScript skills further? Start experimenting with
          the event loop using setTimeout, promises, and async/await in your
          projects!
        </p>
      </section>
    </section>
  );
}

export default AsyncVsSync;

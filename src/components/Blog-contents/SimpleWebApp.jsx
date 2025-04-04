import React from "react";
import "./blog-contents.css";
import simplewebApp from "./simplewebapp.png";

function SimpleWebApp() {
  return (
    <section className="blog-contents-container">
      <section className="blog-contents">
        <h2 className="blog-contents-title">
          How to Build a Simple Web App Using Vanilla JavaScript
        </h2>
        <img src={simplewebApp} alt="clear code" className="blog-title-image" />
        <p className="blog-contents-date">Posted on 31/03/2025</p>

        <h3 className="blog-contents-sub-title">Introductions</h3>
        <p className="blog-contents-introduction">
          Building a web app with Vanilla JavaScript (pure JavaScript without
          frameworks) is a great way to understand the fundamentals of web
          development. In this guide, we'll walk through creating a simple to-do
          app using HTML, CSS, and JavaScript.
        </p>

        <section className="blog-contents-section">
          <p>Prerequisites</p>
          <p>Before we start, ensure you have:</p>

          <ul className="blog-contents-list">
            <li>A code editor (VS Code, Sublime Text, etc.)</li>
            <li>A modern web browser</li>
            <li>A web browser for testing.</li>
            <li>Basic understanding of HTML, CSS, and JavaScript</li>
          </ul>
        </section>

        <section className="blog-contents-section">
          <p>Step 1: Setting Up the Project</p>
          <p>
            Create a new project folder and inside it, add the following files:
          </p>
          <ul className="blog-contents-list">
            <li>index.html</li>
            <li>styles.css</li>
            <li>script.js</li>
          </ul>
        </section>

        <section className="blog-contents-section">
          <p>Step 2: Creating the HTML Structure</p>
          <p>In index.html, write the basic structure of our to-do app.</p>

          <pre>
            <code>
              <span className="tag">&lt;!DOCTYPE html&gt;</span>
              <br />
              <span className="tag">&lt;html</span>{" "}
              <span className="attr">lang</span>=
              <span className="string">"en"</span>
              <span className="tag">&gt;</span>
              <br />
              <span className="tag">&lt;head&gt;</span>
              <br />
              &nbsp;&nbsp;<span className="tag">&lt;meta</span>{" "}
              <span className="attr">charset</span>=
              <span className="string">"UTF-8"</span>{" "}
              <span className="tag">/&gt;</span>
              <br />
              &nbsp;&nbsp;<span className="tag">&lt;meta</span>{" "}
              <span className="attr">name</span>=
              <span className="string">"viewport"</span>
              <span className="attr">content</span>=
              <span className="string">
                "width=device-width, initial-scale=1.0"
              </span>{" "}
              <span className="tag">/&gt;</span>
              <br />
              &nbsp;&nbsp;<span className="tag">&lt;title&gt;</span>To-Do App
              <span className="tag">&lt;/title&gt;</span>
              <br />
              &nbsp;&nbsp;<span className="tag">&lt;link</span>{" "}
              <span className="attr">rel</span>=
              <span className="string">"stylesheet"</span>
              <span className="attr">href</span>=
              <span className="string">"styles.css"</span>{" "}
              <span className="tag">/&gt;</span>
              <br />
              <span className="tag">&lt;/head&gt;</span>
              <br />
              <span className="tag">&lt;body&gt;</span>
              <br />
              &nbsp;&nbsp;<span className="tag">&lt;div</span>{" "}
              <span className="attr">class</span>=
              <span className="string">"container"</span>
              <span className="tag">&gt;</span>
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="tag">&lt;h1&gt;</span>
              To-Do List<span className="tag">&lt;/h1&gt;</span>
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="tag">
                &lt;input
              </span>{" "}
              <span className="attr">type</span>=
              <span className="string">"text"</span>
              <span className="attr">id</span>=
              <span className="string">"taskInput"</span>
              <span className="attr">placeholder</span>=
              <span className="string">"Enter a task"</span>{" "}
              <span className="tag">/&gt;</span>
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="tag">
                &lt;button
              </span>{" "}
              <span className="attr">id</span>=
              <span className="string">"addTask"</span>
              <span className="tag">&gt;</span>Add Task
              <span className="tag">&lt;/button&gt;</span>
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="tag">&lt;ul</span>{" "}
              <span className="attr">id</span>=
              <span className="string">"taskList"</span>
              <span className="tag">&gt;</span>
              <span className="tag">&lt;/ul&gt;</span>
              <br />
              &nbsp;&nbsp;<span className="tag">&lt;/div&gt;</span>
              <br />
              &nbsp;&nbsp;<span className="tag">&lt;script</span>{" "}
              <span className="attr">src</span>=
              <span className="string">"script.js"</span>
              <span className="tag">&gt;&lt;/script&gt;</span>
              <br />
              <span className="tag">&lt;/body&gt;</span>
              <br />
              <span className="tag">&lt;/html&gt;</span>
            </code>
          </pre>
        </section>

        <section className="blog-contents-section">
          <p>Step 3: Styling the App with CSS</p>
          <p>
            In styles.css, add some styles to make our app visually appealing.
          </p>

          <pre>
            <code>
              <span className="selector">body </span>&#123;
              <br />
              <span className="property">font-family</span>:
              <span className="value">Arial, sans-serif</span>;
              <br />
              <span className="property">display</span>:
              <span className="value">flex</span>;
              <br />
              <span className="property">justify-content</span>:
              <span className="value">center</span>;
              <br />
              <span className="property">align-items</span>:
              <span className="value">center</span>;
              <br />
              <span className="property">height</span>:
              <span className="value">100vh</span>;
              <br />
              <span className="property">background-color</span>:
              <span className="value">#f4f4f4</span>;
              <br />
              &#125;
              <br />
              <br />
              <span className="selector">.container </span>&#123;
              <br />
              <span className="property">background</span>:
              <span className="value">white</span>;
              <br />
              <span className="property">padding</span>:
              <span className="value">20px</span>;
              <br />
              <span className="property">box-shadow</span>:
              <span className="value">0 0 10px rgba(0, 0, 0, 0.1)</span>;
              <br />
              <span className="property">border-radius</span>:
              <span className="value">5px</span>;
              <br />
              <span className="property">width</span>:
              <span className="value">300px</span>;
              <br />
              <span className="property">text-align</span>:
              <span className="value">center</span>;
              <br />
              &#125;
              <br />
              <br />
              <span className="selector">input </span>&#123;
              <br />
              <span className="property">width</span>:
              <span className="value">80%</span>;
              <br />
              <span className="property">padding</span>:
              <span className="value">5px</span>;
              <br />
              <span className="property">margin-bottom</span>:
              <span className="value">10px</span>;
              <br />
              &#125;
              <br />
              <br />
              <span className="selector">button </span>&#123;
              <br />
              <span className="property">padding</span>:
              <span className="value">5px 10px</span>;
              <br />
              <span className="property">cursor</span>:
              <span className="value">pointer</span>;
              <br />
              <span className="property">background</span>:
              <span className="value">#28a745</span>;
              <br />
              <span className="property">color</span>:
              <span className="value">white</span>;
              <br />
              <span className="property">border</span>:
              <span className="value">none</span>;
              <br />
              <span className="property">border-radius</span>:
              <span className="value">3px</span>;
              <br />
              &#125;
              <br />
              <br />
              <span className="selector">ul </span>&#123;
              <br />
              <span className="property">list-style</span>:
              <span className="value">none</span>;
              <br />
              <span className="property">padding</span>:
              <span className="value">0</span>;
              <br />
              &#125;
              <br />
              <br />
              <span className="selector">li </span>&#123;
              <br />
              <span className="property">background</span>:
              <span className="value">#ddd</span>;
              <br />
              <span className="property">padding</span>:
              <span className="value">5px</span>;
              <br />
              <span className="property">margin</span>:
              <span className="value">5px 0</span>;
              <br />
              <span className="property">display</span>:
              <span className="value">flex</span>;
              <br />
              <span className="property">justify-content</span>:
              <span className="value">space-between</span>;
              <br />
              &#125;
              <br />
              <br />
              <span className="selector">li .delete </span>&#123;
              <br />
              <span className="property">color</span>:
              <span className="value">red</span>;
              <br />
              <span className="property">cursor</span>:
              <span className="value">pointer</span>;
              <br />
              &#125;
            </code>
          </pre>
        </section>

        <section className="blog-contents-section">
          <p>Step 4: Writing JavaScript for Functionality</p>
          <p>
            Step 4: Writing JavaScript for Functionality Now, let’s implement
            the functionality in script.js.
          </p>

          <pre>
            <code>
              <span className="keyword">document</span>.
              <span className="method">addEventListener</span>(
              <span className="string">"DOMContentLoaded"</span>, () =&gt;
              &#123;
              <br />
              <span className="keyword">const</span>
              <span className="variable"> taskInput</span> =
              <span className="method"> document.getElementById</span>(
              <span className="string">"taskInput"</span>);
              <br />
              <span className="keyword">const</span>
              <span className="variable"> addTaskButton</span> =
              <span className="method"> document.getElementById</span>(
              <span className="string">"addTask"</span>);
              <br />
              <span className="keyword">const</span>
              <span className="variable"> taskList</span> =
              <span className="method"> document.getElementById</span>(
              <span className="string">"taskList"</span>);
              <br />
              <br />
              <span className="variable">addTaskButton</span>.
              <span className="method">addEventListener</span>(
              <span className="string">"click"</span>, () =&gt; &#123;
              <br />
              <span className="keyword">const</span>
              <span className="variable"> taskText</span> =
              <span className="variable"> taskInput</span>.
              <span className="method">value.trim</span>();
              <br />
              <span className="keyword">if</span>(
              <span className="variable">taskText</span> ===
              <span className="string">""</span>)
              <span className="keyword">return</span>;
              <br />
              <br />
              <span className="keyword">const</span>
              <span className="variable"> li</span> =
              <span className="method"> document.createElement</span>(
              <span className="string">"li"</span>);
              <br />
              <span className="variable">li</span>.
              <span className="property">innerHTML</span> =
              <span className="string">
                `$&#123;taskText&#125; &lt;span
                class='delete'&gt;&times;&lt;/span&gt;`
              </span>
              ;
              <br />
              <br />
              <span className="variable">li</span>.
              <span className="method">querySelector</span>(
              <span className="string">".delete"</span>).
              <span className="method">addEventListener</span>(
              <span className="string">"click"</span>, () =&gt; &#123;
              <br />
              <span className="variable">taskList</span>.
              <span className="method">removeChild</span>(
              <span className="variable">li</span>);
              <br />
              &#125;);
              <br />
              <br />
              <span className="variable">taskList</span>.
              <span className="method">appendChild</span>(
              <span className="variable">li</span>);
              <br />
              <span className="variable">taskInput</span>.
              <span className="property">value</span> =
              <span className="string">""</span>;
              <br />
              &#125;); &#125;);
            </code>
          </pre>
        </section>

        <section className="blog-contents-section">
          <p>Step 5: Testing and Enhancing</p>
          <p>
            Open index.html in your browser and test the app. You should be able
            to:
          </p>

          <ul className="blog-contents-list">
            <li>
              Enter a task and click the “Add Task” button to add it to the
              list.
            </li>
            <li>Click the delete button (×) to remove a task.</li>
          </ul>
        </section>
        <section className="blog-contents-section">
          <p>Additional Features</p>
          <p>
            Open index.html in your browser and test the app. You should be able
            to:
          </p>

          <ul className="blog-contents-list">
            <li>
              Local Storage: Save tasks so they persist after a page reload.
            </li>
            <li>Edit Tasks: Allow users to modify tasks.</li>
            <li>Task Completion: Mark tasks as completed.</li>
          </ul>
        </section>

        <section className="blog-contents-section">
          <p>Conclusion</p>
          <p>
            We’ve successfully built a simple to-do app using Vanilla
            JavaScript. This project teaches DOM manipulation, event handling,
            and basic interactivity. As you improve, consider adding animations,
            API integration, or a database backend.
          </p>
        </section>
      </section>
    </section>
  );
}

export default SimpleWebApp;

import React from "react";
import "./blog-contents.css";
import cleanercodepx from "./cleanercode.png";

function CleanerCode() {
  return (
    <section className="blog-contents-container">
      <section className="blog-contents">
        <h2 className="blog-contents-title">
          10 Must-Know JavaScript Tricks to Write Cleaner Code
        </h2>
        <img src={cleanercodepx} alt="clear code"  className="blog-title-image"/>
        <p className="blog-contents-date">Posted on 29/03/2025</p>

        <h3 className="blog-contents-sub-title">Introductions</h3>
        <p className="blog-contents-introduction">
          Writing clean JavaScript code makes your projects easier to maintain,
          debug, and scale. Here are ten powerful JavaScript tricks to enhance
          your code quality and efficiency.
        </p>

        <section className="blog-contents-section">
          <p>1. Use Optional Chaining (?.)</p>
          <p>
            Optional chaining prevents errors when accessing deeply nested
            object properties that might be undefined or null
          </p>
          <pre>
            <code>
              <span className="keyword">const </span>
              <span className="variable">user</span> =
              <span className="bracket"> &#123;</span>
              <span className="property">profile</span>:
              <span className="bracket">&#123;</span>
              <span className="property">name</span>:
              <span className="string">"John"</span>
              <span className="bracket">&#125;</span>
              <span className="bracket">&#125;</span>;
              <br />
              <span className="console">console</span>.
              <span className="method">log</span>(
              <span className="variable">user</span>.
              <span className="property">profile</span>?.
              <span className="property">name</span>
              );
              <span className="comment">// "John"</span>
              <br />
              <span className="console">console</span>.
              <span className="method">log</span>(
              <span className="variable">user</span>.
              <span className="property">address</span>?.
              <span className="property">street</span>
              );
              <span className="comment">// undefined</span>
            </code>
          </pre>
        </section>

        <section className="blog-contents-section">
          <p>2. Use Nullish Coalescing Operator (??)</p>
          <p>
            Use ?? to set default values only when the left-hand side is null or
            undefined.
          </p>
          <pre>
            <code>
              <span className="keyword">const </span>
              <span className="variable">username</span> =
              <span className="literal"> null</span>;
              <br />
              <span className="console">console</span>.
              <span className="method">log</span>(
              <span className="variable">username</span> ??
              <span className="string">"Guest"</span>
              );
              <span className="comment">// "Guest"</span>
            </code>
          </pre>
        </section>

        <section className="blog-contents-section">
          <p>3. Destructure Objects and Arrays</p>
          <p>
            Destructuring makes it easier to extract values from objects and
            arrays.
          </p>
          <pre>
            <code>
              <span className="keyword">const </span>
              <span className="variable">user</span> =
              <span className="bracket"> &#123;</span>
              <span className="property">name</span>:
              <span className="string">"Alice"</span>,
              <span className="property">age</span>:
              <span className="number">25</span>
              <span className="bracket">&#125;</span>;
              <br />
              <span className="keyword">const</span>
              <span className="bracket">&#123;</span>
              <span className="variable">name</span>,
              <span className="variable">age</span>
              <span className="bracket">&#125;</span> =
              <span className="variable"> user</span>;
              <br />
              <span className="console">console</span>.
              <span className="method">log</span>(
              <span className="variable">name</span>,
              <span className="variable">age</span>
              );
              <span className="comment">// "Alice", 25</span>
            </code>
          </pre>
        </section>

        <section className="blog-contents-section">
          <p>4. Use Template Literals for String Concatenation</p>
          <p>
            Template literals allow you to embed expressions within string
            literals.
          </p>
          <pre>
            <code>
              <span className="keyword">const </span>
              <span className="variable">name</span> =
              <span className="string"> "Bob"</span>;
              <br />
              <span className="console">console</span>.
              <span className="method">log</span>(
              <span className="template">
                `Hello, <span className="variable">${name}</span>!`
              </span>
              );
              <span className="comment">// "Hello, Bob!"</span>
            </code>
          </pre>
        </section>

        <section className="blog-contents-section">
          <p>5. Short-Circuit Evaluation for Conditional Assignments</p>
          <p>Leverage && and || for concise conditional assignments.</p>
          <pre>
            <code>
              <span className="keyword">const </span>
              <span className="variable">isAdmin</span> =
              <span className="boolean"> true</span>;
              <br />
              <span className="variable">isAdmin</span> &&
              <span className="console"> console</span>.
              <span className="method">log</span>(
              <span className="string">"Access granted"</span>
              );
              <span className="comment">// Logs if isAdmin is true</span>
            </code>
          </pre>
        </section>

        <section className="blog-contents-section">
          <p>6. Use map(), filter(), and reduce() Instead of Loops</p>
          <p>
            Functional programming methods like map(), filter(), and reduce()
            are more expressive and concise than traditional loops.
          </p>
          <pre>
            <code>
              <span className="keyword">const</span>
              <span className="variable"> numbers</span> =
              <span className="bracket"> [</span>
              <span className="number">1</span>,
              <span className="number">2</span>,
              <span className="number">3</span>,
              <span className="number">4</span>,
              <span className="number">5</span>
              <span className="bracket">]</span>;
              <br />
              <span className="keyword">const</span>
              <span className="variable"> doubled</span> =
              <span className="variable"> numbers</span>.
              <span className="method">map</span>(
              <span className="variable">n</span>
              <span className="operator">=&gt;</span>
              <span className="variable">n</span>
              <span className="operator">*</span>
              <span className="number">2</span>
              );
              <br />
              <span className="console">console</span>.
              <span className="method">log</span>(
              <span className="variable">doubled</span>
              );
              <span className="comment">// [2, 4, 6, 8, 10]</span>
            </code>
          </pre>
        </section>

        <section className="blog-contents-section">
          <p>7. Default Function Parameters</p>
          <p>
            Avoid unnecessary if checks by using default function parameters.
          </p>
          <pre>
            <code>
              <span className="keyword">function </span>
              <span className="variable">greet</span>(
              <span className="variable">name</span> =
              <span className="string"> "World"</span>)
              <span className="bracket">&#123;</span>
              <br />
              <span className="console">console</span>.
              <span className="method">log</span>(
              <span className="template">
                `Hello, <span className="variable">${name}</span>!`
              </span>
              );
              <span className="bracket">&#125;</span>
              <span className="variable">greet</span>();
              <span className="comment">// "Hello, World!"</span>
            </code>
          </pre>
        </section>

        <section className="blog-contents-section">
          <p>8. Use Arrow Functions for Cleaner Syntax</p>
          <p>Arrow functions make callbacks and one-liners more elegant.</p>
          <pre>
            <code>
              <span className="keyword">const</span>
              <span className="variable"> add</span> =
              <span className="bracket"> (</span>
              <span className="variable">a</span>,
              <span className="variable">b</span>
              <span className="bracket">)</span>
              <span className="operator"> =&gt;</span>
              <span className="variable"> a</span>
              <span className="operator">+</span>
              <span className="variable">b</span>;
              <br />
              <span className="console">console</span>.
              <span className="method">log</span>(
              <span className="variable">add</span>(
              <span className="number">2</span>,
              <span className="number">3</span>) );
              <span className="comment">// 5</span>
            </code>
          </pre>
        </section>

        <section className="blog-contents-section">
          <p>9. Use Object.keys(), Object.values(), and Object.entries()</p>
          <p>These methods help manipulate objects efficiently.</p>
          <pre>
            <code>
              <span className="keyword">const</span>
              <span className="variable"> user</span> =
              <span className="bracket"> &#123;</span>
              <span className="property">name</span>:
              <span className="string">"Alice"</span>,
              <span className="property">age</span>:
              <span className="number">25</span>
              <span className="bracket">&#125;</span>;
              <br />
              <span className="console">console</span>.
              <span className="method">log</span>(
              <span className="method">Object.keys</span>(
              <span className="variable">user</span>) );
              <span className="comment">// ["name", "age"]</span>
              <br />
              <span className="console">console</span>.
              <span className="method">log</span>(
              <span className="method">Object.values</span>(
              <span className="variable">user</span>) );
              <span className="comment">// ["Alice", 25]</span>
              <br />
              <span className="console">console</span>.
              <span className="method">log</span>(
              <span className="method">Object.entries</span>(
              <span className="variable">user</span>) );
              <span className="comment">
                // [["name", "Alice"], ["age", 25]]
              </span>
            </code>
          </pre>
        </section>

        <section className="blog-contents-section">
          <p>10. Use Set for Unique Values</p>
          <p>Eliminate duplicate values easily using Set.</p>
          <pre>
            <code>
              <span className="keyword">const</span>
              <span className="variable"> numbers</span> =
              <span className="bracket"> [</span>
              <span className="number">1</span>,
              <span className="number">2</span>,
              <span className="number">2</span>,
              <span className="number">3</span>,
              <span className="number">4</span>,
              <span className="number">4</span>
              <span className="bracket">]</span>;
              <br />
              <span className="keyword">const</span>
              <span className="variable"> uniqueNumbers</span> =
              <span className="bracket"> [</span>...
              <span className="keyword">new</span>
              <span className="class">Set</span>(
              <span className="variable">numbers</span>)
              <span className="bracket">]</span>;
              <br />
              <span className="console">console</span>.
              <span className="method">log</span>(
              <span className="variable">uniqueNumbers</span>
              );
              <span className="comment">// [1, 2, 3, 4]</span>
            </code>
          </pre>
        </section>

        <p className="conclusion">
          These JavaScript tricks can help you write cleaner, more efficient
          code and improve your overall development experience. Incorporate them
          into your projects to enhance readability, maintainability, and
          scalability.{" "}
        </p>
      </section>
    </section>
  );
}

export default CleanerCode;

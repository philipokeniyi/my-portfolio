import PropTypes from "prop-types";
import "./Card.css";

function Card({
  title = "Task Manager App",
  description = "A full-stack web app for managing daily tasks with authentication.",
  stack = "React, Node.js, MongoDB",
  link = "https://www.google.com",
  image = "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  alt = "Card Image",
}) {
  return (
    
    <div className="card-container">
      <section className="card">
        <div className="image">
          <img src={image} alt={alt} className="card-image" />
        </div>

        <div className="info">
          <h2>{title}</h2>
          <p>{description}</p>
          <p className="stack-info"> 
            <span className="stack">Tech Stack:</span> {stack}
          </p>
          <p>
            <a href={link} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  stack: PropTypes.string,
  link: PropTypes.string,
  image: PropTypes.string,
  alt: PropTypes.string,
};

export default Card;

import { useEffect, useRef } from "react";
import "./home.css";

const Starfield = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function setCanvasSize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    let stars = [];

    function createStars() {
      stars = [];

      // Adjust star count and size based on screen width
      const isSmallScreen = window.innerWidth <= 450;
      const numStars = isSmallScreen ? 70 : 100; // Reduce number of stars on small screens
      const maxSize = isSmallScreen ? 1.5 : 2; // Reduce size on small screens

      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * maxSize,
          speed: Math.random() * 2 + 1,
        });
      }
    }

    function updateStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "white";

      for (let star of stars) {
        star.y -= star.speed; // Move up

        if (star.y < 0) {
          star.y = canvas.height;
          star.x = Math.random() * canvas.width;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function animate() {
      updateStars();
      requestAnimationFrame(animate);
    }

    function handleResize() {
      setCanvasSize();
      createStars();
    }

    setCanvasSize();
    createStars();
    animate();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <canvas ref={canvasRef} className="star" />;
};

export default Starfield;

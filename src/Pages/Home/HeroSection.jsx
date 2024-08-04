import React, { useState, useEffect } from 'react';

export default function HeroSection() {
  const titles = ["Full Stack", "DevOps", "Data Science"];
  const [currentTitle, setCurrentTitle] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        setCurrentTitle((prevTitle) => (prevTitle + 1) % titles.length);
        setIsFadingOut(false);
      }, 1000);
    }, 2000); // Total duration of the animation cycle

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Harshal</p>
          <h1 className="hero--section--title">
            <span className={`hero--section-title--color ${isFadingOut ? 'fade-out' : ''}`}>
              {titles[currentTitle]}
            </span>{" "}
            <br />
            Engineer
          </h1>
          <p className="hero--section-description">
          I am Harshal Dhawad, a Software Engineer skilled in Full-Stack Development, DevOps, and Machine Learning. Experienced in hackathons and projects, with certifications from IBM, Google, and Coursera.
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/heerro.png" alt="Hero Section" />
      </div>
    </section>
  );
}

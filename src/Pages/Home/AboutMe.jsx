export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/abbout.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
          I am Harshal Dhawad, a Software Engineer currently pursuing a B.Tech in Computer Science and Engineering at Shri Guru Gobind Singhji Institute of Engineering & Technology, Nanded, with a CGPA of 8.03. I have hands-on experience in various hackathons, such as the Smart India Hackathon and SunHack, where I worked on terrain detection using CNNs and an AI-powered resume ATS system. My technical skills encompass a range of programming languages like Dart, Java, C, JavaScript, and Python, as well as frameworks like React, Node.js, Express.js, Flask, and Django. 
          </p>
          <p className="hero--section-description">
          Additionally, I have expertise in DevOps, Data Science, and Machine Learning, with practical knowledge of tools and platforms such as GitHub, Linux, Docker, Jenkins, AWS, and Kubernetes. My projects span CI/CD pipelines, full-stack development, and face-recognition systems for attendance management. I hold certifications in Database and SQL for Data Science with Python from IBM, User Experience Design from Google, and TensorFlow for CNNs from Coursera.
          </p>
        </div>
      </div>
    </section>
  );
}

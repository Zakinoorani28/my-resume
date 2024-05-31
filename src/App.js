// App.js
import React from 'react';
import './ResumeStyle.css';
import './Resume';
import image from './My Pic 1.jpg'

function App() {
  return (
    <div className="container">
      <div className="left-column">
        <div className="contact-info">
          <img src={image} alt="MyImage" />
          <h1 className="heading">MUHAMMAD ZAKI NOORANI</h1>
          <h3>WEB AND MOBILE APP DEVELOPER</h3>
          <p><a href="tel:+923201294154"><i className="ri-phone-fill"></i>+923201294154</a></p>
          <p><a href="mailto:zakinoorani2006@gmail.com"><i className="ri-mail-fill"></i> zakinoorani2006@gmail.com</a></p>
          <p><a href="https://maps.app.goo.gl/wqika8niD7q3PBKy7"><i className="ri-map-pin-fill"></i>1182 Block 2 F.B Area Azizabad, Karachi/Pakistan, 75950</a></p>
        </div>

        <div className="education">
          <h2>Education</h2>
          <ul>
            <li>
              <h3>SSC</h3>
              <p>Matric in CS, S.A.J Academy</p>
              <p>2012-2022</p>
            </li>
            <li>
              <h3>HSC</h3>
              <p>Intermediate in CS, From Sir Adamjee Institute</p>
              <p>[2022-2024]</p>
            </li>
            <li>
              <h3>WEB DEVELOPER</h3>
              <p>Web & Mobile App Development, From Sylani Mass IT (SMIT)</p>
              <p>[In process]</p>
            </li>
          </ul>
        </div>

        <div className="certificate">
          <h2>Certificates</h2>
          <ul>
            <li>Certified Frontend Developer from (SMIT)</li>
            <li>Certified UI/UX Designer from (Google) </li>
          </ul>
        </div>
      </div>
      <div className="right-column">
        <div className="profile">
          <h2>Profile</h2>
          <p>Highly motivated and experienced Web and Mobile App developer with 2+ years of
            experience in building scalable and efficient Websites and Applications.</p>
        </div>
        <div className="skills">
          <h2>Skills</h2>
          <ul>
            <li>HTML 5</li>
            <li>CSS 3</li>
            <li>JavaScript</li>
            <li>React JS</li>
            <li>Bootstrap</li>
            <li>Tailwind CSS</li>
            <li>Resbonsive Web Design</li>
            <li>Mobile App Development</li>
            <li>UI/UX Design</li>
            <li>Git/GitHub</li>
          </ul>
        </div>
        <div className="experience">
          <h2>Experience</h2>
          <ul>
            <li>
              <h3>Web And Mobile App Developer</h3>
              <h4>XGEN Technologies (2024-Present)</h4>
              <p>Developed multiple high-traffic Websites and Applications</p>
              <p>Improved Websites and Applications performance by 30%</p>
            </li>
            <li>
              <h3>Intern Software Developer</h3>
              <h4>eDesk Solutions (2023)</h4>
              <p>Developed multiple Static ANd Dynamic Websites</p>
              <p>Improved Websites and And Learn More Skills</p>
            </li>
          </ul>
        </div>

        <div className="awards">
          <h2>Awards</h2>
          <ul>
            <li>
              <h3>Best Developer Award, 2024</h3>
              <p>Google Developer Conference</p>
            </li>
            <li>
              <h3>Top 10 Finalist, 2024</h3>
              <p>SMIT Hackathon</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
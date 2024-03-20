import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Passionate about crafting exceptional experiences, we strive for excellence in every detail, creating memories that last a lifetime.</p>
        <a href='http://localhost:3000/bookTable'> <button type="button" className="custom__button">Book Table</button></a>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Founded with a vision, our journey is marked by resilience, growth, and a commitment to delivering exceptional quality.</p>
        <a href='http://localhost:3000/bookTable'> <button type="button" className="custom__button">Book Table</button></a>
      </div>
    </div>
  </div>
);

export default AboutUs;
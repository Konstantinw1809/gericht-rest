import React from "react";
import knife from "../../assets/knife.png";
import G from "../../assets/G.png";
import spoon from "../../assets/spoon.png";

import "./AboutUs.css";

function AboutUs() {
  return (
    <section className="app__about section__padding" id="about">
      <div className="app__about-overlay">
        <img src={G} alt="G" />
      </div>
      <div className="app__about-content">
        <div className="app__about-content_left">
          <h2>About us</h2>
          <div className="app__about-content_left-img">
            <img src={spoon} alt="spoon" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <button type="button">Know More</button>
        </div>
        <div className="app__about-content_center">
          <img src={knife} alt="knife" />
        </div>
        <div className="app__about-content_right">
          <h2>Our History</h2>
          <div className="app__about-content_right-img">
            <img src={spoon} alt="spoon" />
          </div>
          <p>
            Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
            Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
            odio nec aliquet.
          </p>
          <button type="button">Know More</button>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;

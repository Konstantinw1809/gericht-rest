import React from "react";
import SubHeading from "../../components/SubHeading/SubHeading";

import findus from "../../assets/findus.png";

import "./FindUs.css";

function FindUs() {
  return (
    <section className="app__findus section__padding" id="contact">
      <div className="app__findus-content">
        <div className="app__findus-content_subheading">
          <SubHeading title="Contact" />
        </div>
        <h2 className="app__findus-content_heading">Find Us</h2>
        <p className="app__findus-content_text">
          Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
        </p>
        <h4 className="app__findus-content_hours">Opening Hours</h4>
        <div className="app__findus-content_schedule">
          <p>Mon - Fri: 10:00 am - 02:00 am</p>
          <p>Sat - Sun: 10:00 am - 03:00 am</p>
        </div>
        <button type="button">Visit Us</button>
      </div>
      <div className="app__findus-image">
        <img src={findus} alt="findus" />
      </div>
    </section>
  );
}

export default FindUs;

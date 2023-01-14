import React from "react";

import logo from "../../assets/logo.png";
import food from "../../assets/laurels.png";

import Laurel from "../../components/Laurel/Laurel";
import SubHeading from "../../components/SubHeading/SubHeading";

import { laurels } from "../../constants/data";

import "./Laurels.css";

function Laurels() {
  return (
    <section className="app__laurels section__padding" id="awards">
      <div className="app__laurels-logo">
        <div className="app__laurels-logo_img">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="app__laurels-content">
        <div className="app__laurels-content_subheading">
          <SubHeading title="Awards & recognition" />
        </div>
        <h2>Our Laurels</h2>
        <div className="app__laurels-content_laurel">
          {laurels.map((item, index) => (
            <Laurel
              title={item.title}
              text={item.text}
              image={item.image}
              key={item.title + index}
            />
          ))}
        </div>
      </div>
      <div className="app__laurels-img">
        <img src={food} alt="food" />
      </div>
    </section>
  );
}

export default Laurels;

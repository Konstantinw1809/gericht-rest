import React from "react";

import "./SubHeading.css";

import spoon from "../../assets/spoon.png";

function SubHeading({ title }) {
  return (
    <div className="app__sub">
      <p>{title}</p>
      <div className="app__sub_img">
        <img src={spoon} alt="spoon" />
      </div>
    </div>
  );
}

export default SubHeading;

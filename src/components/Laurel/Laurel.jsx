import React from "react";

import "./Laurel.css";

function Laurel({ image, title, text }) {
  return (
    <div className="app__laurel">
      <div className="app_laurel-img">
        <img src={image} alt="laurel" />
      </div>
      <div className="app__laurel-content">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Laurel;

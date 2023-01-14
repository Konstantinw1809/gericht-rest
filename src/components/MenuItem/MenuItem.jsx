import React from "react";

import "./MenuItem.css";

function MenuItem({ title, price, tags }) {
  return (
    <div className="app__menuitem">
      <div className="app__menuitem-content">
        <div className="app__menuitem-content_title">{title}</div>
        <div className="app__menuitem-content_line"></div>
        <div className="app__menuitem-content_price">{price}</div>
      </div>
      <div className="app__menuitem_tags">{tags}</div>
    </div>
  );
}

export default MenuItem;

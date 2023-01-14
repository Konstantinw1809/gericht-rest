import React from "react";
import MenuItem from "../../components/MenuItem/MenuItem";
import SubHeading from "../../components/SubHeading/SubHeading";
import { wines, cocktails } from "../../constants/data";
import wave from "../../assets/wave.png";

import menu from "../../assets/menu.png";

import "./Menu.css";

function Menu() {
  return (
    <section className="app__menu section__padding" id="menu">
      <img className="app__menu_wave" src={wave} alt="wave" />
      <div className="app__menu_subheading">
        <SubHeading title="Menu that fits you palatte" />
      </div>
      <div className="app__menu_heading">Today’s Special</div>
      <div className="app__menu-content">
        <div className="app__menu-content_left">
          <h3>Wine & Beer</h3>
          {wines.map((item, index) => (
            <MenuItem
              title={item.title}
              price={item.price}
              tags={item.tags}
              key={item.title + index}
            />
          ))}
        </div>
        <div className="app__menu-content_center">
          <img src={menu} alt="menu" />
        </div>
        <div className="app__menu-content_right">
          <h3>Cocktails</h3>
          {cocktails.map((item) => (
            <MenuItem title={item.title} price={item.price} tags={item.tags} />
          ))}
        </div>
      </div>
      <button type="button">View More</button>
    </section>
  );
}

export default Menu;

import React from "react";

import "./Header.css";
import SubHeading from "../../components/SubHeading/SubHeading";
import welcome from "../../assets/welcome.png";

function Header() {
  return (
    <div className="app__header section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Chase the new Flavour" />
        <h1>The Key To Fine Dining</h1>
        <p>
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus
        </p>
        <button type="button">Explore Menu</button>
      </div>
      <div className="app__wrapper_img">
        <img src={welcome} alt="welcome" />
      </div>
    </div>
  );
}

export default Header;

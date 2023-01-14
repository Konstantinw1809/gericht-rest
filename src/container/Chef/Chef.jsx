import React from "react";

import chef from "../../assets/chef.png";
import quote from "../../assets/quote.png";
import sign from "../../assets/sign.png";

import SubHeading from "../../components/SubHeading/SubHeading";

import "./Chef.css";

function Chef() {
  return (
    <section className="app__chef section__padding">
      <div className="app__chef-img">
        <img src={chef} alt="chef" />
      </div>
      <div className="app__chef-content">
        <div className="app__chef-content_subheading">
          <SubHeading title="Chef’s Word" />
        </div>
        <h2>What we believe in</h2>
        <div className="app__chef-content-block">
          <div className="app__chef-content-block_quote">
            <img src={quote} alt="quote" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .
          </p>
        </div>
        <p className="app__chef-content_description">
          auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit.
          Nulla scelerisque scelerisque congue ac consequat, aliquam molestie
          lectus eu. Congue iaculis integer curabitur semper sit nunc.
        </p>
        <p className="app__chef-content_name">Kevin Luo</p>
        <p className="app__chef-content_position">Chef & Founder</p>
        <div className="app__chef-content_sign">
          <img src={sign} alt="sign" />
        </div>
      </div>
    </section>
  );
}

export default Chef;

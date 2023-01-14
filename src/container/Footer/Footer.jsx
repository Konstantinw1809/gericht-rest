import React from "react";

import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import Newsletter from "../../components/Newsletter/Newsletter";
import FooterOverlay from "../../components/FooterOverlay/FooterOverlay";

import spoon from "../../assets/spoon.png";

import "./Footer.css";

function Footer() {
  return (
    <section className="app__footer section__padding">
      <div className="app__footer-overlay"></div>
      <Newsletter />
      <div className="app__footer-row">
        <div className="app__footer-row_column first">
          <h4>Contact Us</h4>
          <p>9 W 53rd St, New York, NY 10019, USA</p>
          <p>
            +1 212-344-1230 <br /> +1 212-555-1230
          </p>
        </div>
        <div className="app__footer-row_column second">
          <h1>Gerícht</h1>
          <div className="app__footer-row_column-text">
            "The best way to find yourself is to lose yourself in the <br />
            service of others.”
          </div>
          <img src={spoon} alt="spoon" />
          <div className="app__footer-row_column-icons">
            <FiFacebook className="icon" />
            <FiTwitter className="icon" />
            <FiInstagram className="icon" />
          </div>
        </div>
        <div className="app__footer-row_column third">
          <h4>Working Hours</h4>
          <p>
            Monday-Friday:
            <br />
            08:00 am -12:00 am
          </p>
          <p>
            Saturday-Sunday: <br /> 07:00am -11:00 pm
          </p>
        </div>
      </div>
      <p className="app__footer-rights">2021 Gerícht. All Rights reserved.</p>
    </section>
  );
}

export default Footer;

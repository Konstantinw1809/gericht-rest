import React from "react";

import SubHeading from "../../components/SubHeading/SubHeading";
import "./Newsletter.css";

function Newsletter() {
  return (
    <div className="app__newsletter">
      <div className="app__newsletter-subheading">
        <SubHeading title="Newsletter" />
      </div>
      <h1>Subscribe to Our Newsletter</h1>
      <p className="app__newsletter-text">And never miss latest Updates!</p>
      <form>
        <input size="635" type="email" placeholder="Email Address" />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
}

export default Newsletter;

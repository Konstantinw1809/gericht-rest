import React, { useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import meal from "../../assets/meal.mp4";

import "./Intro.css";

function Intro() {
  const [play, setPlay] = useState(false);
  const vidRef = React.useRef();

  const handleVideo = () => {
    if (play) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }

    setPlay((prevPlay) => !prevPlay);
  };

  return (
    <div className="app__video">
      <video
        src={meal}
        ref={vidRef}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className={`app__video-overlay ${play ? "active" : null}`}>
        <div className="app__video-overlay_circle" onClick={handleVideo}>
          {play ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Intro;

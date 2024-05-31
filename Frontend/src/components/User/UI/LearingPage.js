import React, { useRef } from "react";

import { Button } from "semantic-ui-react";

const LearingPage = ({ CourseId }) => {
  const videoRef = useRef();

  const handleStart = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };
  const videoPath = require(`../Video/Course${CourseId}.mp4`);
  return (
    <>
      <div>
        <video controls ref={videoRef} width={"800px"}>
          <source src={videoPath} type="video/mp4"></source>
        </video>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button color="green" onClick={handleStart} size="huge">
            Start
          </Button>
          <Button color="red" onClick={handlePause} size="huge">
            Pause
          </Button>
        </div>
      </div>
    </>
  );
};

export default LearingPage;

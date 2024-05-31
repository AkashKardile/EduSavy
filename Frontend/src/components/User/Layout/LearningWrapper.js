import React from "react";
import { useLocation } from "react-router-dom";
import LearingPage from "../UI/LearingPage";
import logo from "../../assets/logo.png";

const LearningWrapper = () => {
  const data = useLocation();
  let CourseId = data.state.CourseId;

  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          backgroundImage: `url(${logo})`,
          backgroundSize: "cover",
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            zIndex: 1,
          }}
        ></div>
        <div style={{ position: "relative", zIndex: 2 }}>
          <LearingPage CourseId={CourseId} />
        </div>
      </div>
    </div>
  );
};

export default LearningWrapper;

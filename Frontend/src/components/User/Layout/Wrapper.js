import React, { createContext, useState } from "react";
import Timer from "../UI/Timer";
import Header from "../UI/Header";
import axios from "axios";

import Slider from "../UI/Slider";
import CourseContainer from "../UI/CourseContainer";

import Footer from "../Footer/Footer";
import FooterShow from "../Footer/FooterShow";

const Wrapper = () => {
  const [isLogin, setIsLogin] = useState(false);

  const handleIsLogin = () => {
    setIsLogin(true);
  };

  const handleIsLogout = () => {
    setIsLogin(false);
  };

  return (
    <>
      <Timer />
      <Header
        handleIsLogin={handleIsLogin}
        isLogin={isLogin}
        handleIsLogout={handleIsLogout}
      />
      <Slider />
      <CourseContainer
        isLogin={isLogin}
        handleIsLogin={handleIsLogin}
        handleIsLogout={handleIsLogout}
      />
      <FooterShow />
      <Footer />
    </>
  );
};

export default Wrapper;

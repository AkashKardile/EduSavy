import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../User/Layout/WrapperUser";
import AdminHome from "../Admin/Layout/Wrapper";
import UserLoginPage from "../User/Layout/UserLoginPage";
import FooterShow from "../User/Footer/FooterShow";
import AboutUs from "../User/Footer/About_Us";
import Contactus from "../User/Footer/Contactus";
import HelpCentre from "../User/Footer/HelpCentre";
import PrivacyPolicy from "../User/Footer/PrivacyPolicy";
import Terms_condition from "../User/Footer/Terms_condition";
import Footer from "../User/Footer/Footer";
import LearningWrapper from "../User/Layout/LearningWrapper";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<FooterShow />} />

        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/help_centre" element={<HelpCentre />} />
        <Route path="/privacy_policy" element={<PrivacyPolicy />} />
        <Route path="/terms_conditions" element={<Terms_condition />} />
      </Route>
      <Route path="/adminLogin" element={<AdminHome />} />
      <Route path="/adminLogout" element={<Home />}></Route>
      <Route path="/userLogin" element={<UserLoginPage />} />
      <Route path="/userLearning" element={<LearningWrapper />} />
    </Routes>
  );
};

export default MainRouter;

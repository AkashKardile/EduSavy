import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./About_Us";
import Contactus from "./Contactus";
import HelpCentre from "./HelpCentre";
import PrivacyPolicy from "./PrivacyPolicy";
import Terms_condition from "./Terms_condition";

const FooterRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/help_centre" element={<HelpCentre />} />
        <Route path="/privacy_policy" element={<PrivacyPolicy />} />
        <Route path="/terms_conditions" element={<Terms_condition />} />
      </Routes>
    </div>
  );
};

export default FooterRoutes;

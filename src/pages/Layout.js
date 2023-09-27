import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import WorkExperience from "./WorkExperience";
import ContactMe from "./ContactMe";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Portfolio />} exact />
          <Route path="/skills" element={<Skills />} exact />
          <Route path="/contactme" element={<ContactMe />} exact />
          <Route path="/experience" element={<WorkExperience />} exact />
        </Routes>
        <Footer />
    </div>
  );
};

export default Layout;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import WorkExperience from "./WorkExperience";
import AboutMe from "./AboutMe";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Portfolio />} exact />
          <Route path="/skills" element={<Skills />} exact />
          <Route path="/experience" element={<WorkExperience />} exact />
          <Route path="/aboutme" element={<AboutMe />} exact />
        </Routes>
        <Footer />
    </div>
  );
};

export default Layout;

import React from "react";
import About from "./about/About";
import Section from "./section/Section";
import { Route, Routes } from "react-router-dom"
import Blog from "./blog/Blog";
import Questions from "./questions/Questions";
import Courses from "./courses/Courses";
import Teachers from "./teachers/Teachers";

const Content = () => {
  return (
    <Routes>
      <Route path="/" element={<Section />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/blog" element={<Blog />}/>
      <Route path="/questions" element={<Questions />}/>
      <Route path="/courses" element={<Courses />}/>
      <Route path="/teachers" element={<Teachers />}/>
    </Routes>
  );
};

export default Content;

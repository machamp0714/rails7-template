import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import BlogsNew from "./pages/blogs/new";

const UI = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs/new" element={<BlogsNew />} />
      </Routes>
    </BrowserRouter>
  );
};

export default UI;

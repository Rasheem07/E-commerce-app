import React from "react";
import Nav from "./navBar/nav";
import Main from "./main/main";
import AboutPage from "./navigations/about";
import ContactPage from "./navigations/contactPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/" element={<Main className="bg" />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

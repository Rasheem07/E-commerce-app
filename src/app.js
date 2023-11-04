import React from "react";
import Nav from "./navBar/nav";
import Main from "./main/main";
import AboutPage from "./navigations/about";
import ContactPage from "./navigations/contactPage";
import Listing from "./product listing/listing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

export default function App() {
  const [selectedCategory, setselectedCategory] = useState("all")
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/E-commerce-app" element={<Main className="bg" set={setselectedCategory}/>} />
        <Route path="/contact" element={<ContactPage />} />
        <Route
          path="/listing" exact
          element={<Listing selectedCategory={selectedCategory} />}
        />
      </Routes>
    </Router>
  );
}

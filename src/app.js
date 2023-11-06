import React from "react";
import Nav from "./navBar/nav";
import Main from "./main/main";
import AboutPage from "./navigations/about";
import ContactPage from "./navigations/contactPage";
import Listing from "./product listing/listing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
// import { Category } from "./main/categories";
import Test from "./test";

export default function App() {
  const [category, setcategory] = useState('')
  const [selectedCategory, setselectedCategory] = useState("all")
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/" exact element={<Main className="bg" set={setselectedCategory} set2={category} set3={setcategory}/>} />
        <Route path="/contact" element={<ContactPage />} />
        <Route
          path={`/${category}`} exact
          element={<Listing category={category} />}
        />
      </Routes>
      <Test />
    </Router>
  );
}

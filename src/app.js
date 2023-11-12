import React from "react";
import Nav from "./navBar/nav";
import Main from "./main/main";
import AboutPage from "./navigations/about";
import ContactPage from "./navigations/contactPage";
import Listing from "./product listing/listing";
import Listing2 from "./product listing/listing2";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Listing3 from "./product listing/listing.3";
import Listing4 from "./product listing/listing4";
import { recommendedProducts, topDeals } from "./main/categorieslist";

export default function App() {
  const [category, setcategory] = useState("");
  const [selectedCategory, setselectedCategory] = useState("all");
  const [topDeals, settopDeals] = useState("");
  const [trending, settrending] = useState("");
  const [recommended, setrecommended] = useState("");
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/"
          exact
          element={
            <Main
              className="bg"
              set={setselectedCategory}
              set3={setcategory}
              setdeals={settopDeals}
              settrending={settrending}
              setrecommended={setrecommended}
            />
          }
        />
        <Route path="/contact" element={<ContactPage />} />
        <Route
          path={`/${category}`}
          exact
          element={<Listing category={category} />}
        />
        <Route
          path={`/${topDeals}`}
          exact
          element={<Listing2 deals={topDeals} />}
        />
        <Route
          path={`/${trending}`}
          exact
          element={<Listing3 trend={trending} />}
        />
        <Route
          path={`/${recommended}`}
          exact
          element={<Listing4 rec={recommended} />}
        />
      </Routes>
    </Router>
  );
}

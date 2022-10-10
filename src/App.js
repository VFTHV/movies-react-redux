import React from "react";
import { Routes, Route } from "react-router-dom";
// pages
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Bookmarked from "./pages/Bookmarked";
import TVSeries from "./pages/TVSeries";
import NotFound from "./pages/NotFound";

// components
import Header from "./components/Header";
import SearchInp from "./components/SearchInp";

const App = () => {
  return (
    <>
      <Header />
      <div className="main-container">
        <SearchInp />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookmarked" element={<Bookmarked />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tvseries" element={<TVSeries />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default App;

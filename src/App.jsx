import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/Home/home";
import Cards from "./components/Cards/Cards";
import { Navbar } from "react-bootstrap";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cards" element={<Cards />} />
      </Routes>
    </Router>
  );
};

export default App;

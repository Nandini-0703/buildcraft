import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuroraBackground } from "./components/ui/aurora-background";
import HomePage from "./components/Home/home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuroraBackground } from "./components/ui/aurora-background";

const App = () => {
  // <div className="App">
  //   <AuroraBackground></AuroraBackground>
  // </div>;

  <Routes>
    <Route path="/" element={<AuroraBackground />} />
  </Routes>;
};

export default App;

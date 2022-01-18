import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home, NotFound, Appearance } from "./components";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/halo-infinite/gamertag/:gamertag"
          element={<Appearance />}
        />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;

import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/Navbar";
import { Rectangle_1 } from "./components/Rectangle";
import { Banner_1 } from "./components/Banner";
import { Home } from "./components/Home";
import Login_1 from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About } from "./components/About";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={
            <div>
              <Banner_1 />
              <Rectangle_1 />
              <Home />
            </div>
          } />
          <Route path="/login" element={<Login_1 />} />
          <Route path="/faqs" element={<About />} />
          <Route path="/other" element={<Rectangle_1 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

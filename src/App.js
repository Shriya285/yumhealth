import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/Navbar";
import { Rectangle_1 } from "./components/Rectangle";
import { Banner_1 } from "./components/Banner";
import { Home } from "./components/Home";
import Login_1 from "./components/Login";
import Recipes from './components/Recipes';
import Recipe from './components/Recipe';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header'; // Removed the duplicate import

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
          <Route path="/other" element={<Rectangle_1 />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/faqs" element={<Header />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/About-us" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

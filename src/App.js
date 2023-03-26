import React from "react";
import "./index.css";
import { Home } from "./routes/Home";
import { About } from "./routes/About";
import { Contact } from "./routes/Contact";
import { Projects } from "./routes/Projects";

import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

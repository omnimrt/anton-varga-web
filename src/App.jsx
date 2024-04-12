import { Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";

const AboutPage = React.lazy(() => import("./pages/AboutPage"));
const CvPage = React.lazy(() => import("./pages/CvPage"));
const Homepage = React.lazy(() => import("./pages/HomePage"));
function App() {
  return (
    <div>
      <Routes>
        <Route path="/cv" element={<CvPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/" element={<Homepage />}></Route>
      </Routes>
    </div>
  );
}

export default App;

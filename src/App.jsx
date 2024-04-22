import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import projects from "./projects.json";

const NavBar = lazy(() => import("./components/NavBar/NavBar"));
const ProjectList = lazy(() => import("./components/ProjectList/ProjectList"));
const ImageGallery = lazy(() =>
  import("./components/ImageGallery/ImageGallery")
);
const AboutPage = lazy(() => import("./pages/AboutPage/AboutPage"));
const CvPage = lazy(() => import("./pages/CvPage"));

import "./App.css";

function App() {
  return (
    <div className="app-container">
      <aside className="aside-container">
        <Suspense fallback={<div>Loading ...</div>}>
          <NavBar />
          <ProjectList projects={projects} />
        </Suspense>
      </aside>
      <main className="main-container">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<ImageGallery projects={projects} />} />
            <Route path="cv" element={<CvPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route
              path="/projects/:id"
              element={<ImageGallery projects={projects} />}
            ></Route>
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default App;

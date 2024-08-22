/**
 * Main component for the application.
 *
 * @returns {JSX.Element} The rendered App component.
 */

// React imports
import React, { useState, useEffect } from "react";

// React Router imports
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
// Component imports
import Home from "./components/Home/Home";
import Resume from "./components/Resume/Resume";
import Projects from "./components/Projects/Projects";
import Blog from "./components/Blog/Blog";

// CSS imports
import "./App.css";

// Image imports
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

// App component
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>

    /*
    <>
      <section className="section">
        <div className="container">
          <div className="columns is-mobile is-centered">
            <div className="column is-narrow">
              <a
                href="https://vitejs.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={viteLogo} className="logo" alt="Vite logo" />
              </a>
            </div>
            <div className="column is-narrow">
              <a
                href="https://react.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={reactLogo} className="logo react" alt="React logo" />
              </a>
            </div>
          </div>
          <h1 className="title">Vite + React</h1>
          <div className="card">
            <div className="card-content">
              <div className="content">
                <button
                  className="button is-primary"
                  onClick={() => setCount((count) => count + 1)}
                >
                  Count is {count}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
    */
  );
}

export default App;

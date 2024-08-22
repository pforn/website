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
import PreLoader from "./components/PreLoader";

// CSS imports
import "./App.css";
import "./style.css";

// Image imports

// App component
function App() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    // Simulate a loading process
    setTimeout(() => {
      setLoad(false);
    }, 3000); // Adjust the timeout as needed
  }, []);

  return (
    <div className="App" id={load ? "no-scroll" : "scroll"}>
      <PreLoader load={load} />
      {!load && (
        <div className="fade-in">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;

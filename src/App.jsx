/**
 * Main component for the application.
 *
 * @returns {JSX.Element} The rendered App component.
 */

// React imports
import React from "react";

// React Router imports
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Component imports
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar";

// CSS imports
import "./App.css";

// App component
const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

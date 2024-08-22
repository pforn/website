import React, { useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
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
  );
}

export default App;

import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <header className="main-header">
        <div class="container">
          <h1 class="main-header-logo">B.</h1>
          <nav class="main-nav">
            <ul class="main-nav-list">
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Resume</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div>
        <h2 className="body-h2">Hi, I'm Beth.</h2>
        <h3 className="body-h3">Web developer.</h3>
        <p className="description">
          Currently based in Copenhagen, Denmark, studying Danish and web
          development. I have focused on HTML, CSS, Javascript and React to
          start with, and continue to study and work on private projects.
        </p>
        <label className="check-out-work-label">Check out my work</label>
      </div>
    </div>
  );
}

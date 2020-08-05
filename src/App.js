import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div>
        <header className="header">
          <h1 className="header-h1">cph-kiwi</h1>

          <nav id="navbar" className="menu">
            <ul class="nav-list">
              <li>Portfolio</li>
              <li>About</li>
              <li>Resume</li>
              <li>Contact</li>
            </ul>
          </nav>
        </header>
        <div>
          <h2 className="body-h2">Hi, I'm Beth.</h2>
          <h3 className="body-h3">Web designer and developer.</h3>
          <p className="description">
            Currently based in Copenhagen, Denmark, studying Danish and web
            development. I have focused on HTML, CSS, Javascript and React to
            start with, and continue to study and work on private projects.
          </p>
          <label className="check-out-work-label">Check out my work</label>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <a id="top" />
      <header className="main-header">
        <div className="main-header-logo">
          <a href="#top">B.</a>
        </div>
        <nav className="main-nav">
          <ul className="main-nav-list">
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Resume</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="intro">
        <div className="intro-container">
          <h1 className="intro-h1">Hi, I'm Beth.</h1>
          <h2 className="intro-h2">Web developer.</h2>
          <p className="intro-p">
            Currently based in Copenhagen, Denmark, studying Danish and web
            development. I have focused on HTML, CSS, Javascript and React to
            start with, and continue to study and work on private projects.
          </p>
          <div className="intro-link-to-more">
            <a href="#page2">Check out my work</a>
          </div>
        </div>
      </div>
      <div className="page2" id="page2">
        <div className="page2-container">
          <h5 className="page2-h5">Featured projects</h5>
          <h3 className="page2-h3">Pig Latin Translator</h3>
          <p className="page2-p">
            My first personal project. An app that translates from English into
            Pig Latin (a fun, pseudo-language, mostly used by children in play).
          </p>
          <div className="page2-link-to-more">
            <a href="https://pig-latin.cph.kiwi/">Visit Pig Latin Translator</a>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { GithubIcon, TwitterIcon, LinkedInIcon } from "../src/Icons";
import Head from "next/head";
import { Navigation } from "../src/Navigation";

export default function App() {
  return (
    <div className="App">
      <Head>
        <title>Beth Jackson - Developer</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Playfair+Display:wght@800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <a id="top" />
      <Navigation />
      <div className="intro">
        <div className="intro-container">
          <h1 className="intro-h1">Hi, I'm Beth.</h1>
          <h2 className="intro-h2">Web developer.</h2>
          <p className="intro-p">
            Currently based in Copenhagen, Denmark, studying web development. I
            have focused on HTML, CSS, Javascript and React to start with, and
            continue to study and work on private projects. I completed a
            bootcamp called Hack Your Future, and graduated in June 2021. I have
            also completed the PD3 Danish language course.
          </p>
          <div className="intro-link-to-more">
            <a href="#featured-projects">Check out my work</a>
          </div>
        </div>
      </div>

      <div className="guideit" id="featured-projects" id="guideit">
        <div className="guideit-container">
          <h5 className="guideit-h5">Featured projects</h5>
          <div className="guideit-columns-container">
            <div className="guideit-text-column">
              <h3 className="guideit-h3">GuideIT</h3>
              <p className="guideit-p">
                I worked on this GuideIT website as part of my final group
                project with Hack Your Future. I implemented the quiz
                functionality. This was my first project working in
                collaboration with other developers.
              </p>
              <div className="guideit-link-to-more">
                <a href="https://guide-it-production.herokuapp.com/">
                  Visit the GuideIT website and take the quiz!
                </a>
              </div>
            </div>
            <img
              src="https://github.com/cph-kiwi/cph-kiwi-images/blob/master/Screenshot%202021-12-14%20at%2013.49.49.png?raw=true"
              alt="screenshot of the GuideIT website"
            />
          </div>
        </div>
      </div>

      <div className="meal-sharing" id="meal-sharing">
        <div className="meal-sharing-container">
          <div className="meal-sharing-columns-container">
            <div className="meal-sharing-text-column">
              <h3 className="meal-sharing-h3">Dinner Time</h3>
              <p className="meal-sharing-p">
                This was my personal project from Hack Your Future. I developed
                the front end, then the database using SQL, and finally the
                routers.
              </p>
              <div className="meal-sharing-link-to-more">
                <a href="https://hyf-meal-sharing.herokuapp.com/">
                  Visit Dinner Time!
                </a>
              </div>
            </div>
            <img
              src="https://github.com/cph-kiwi/cph-kiwi-images/blob/master/Screenshot%202021-12-14%20at%2013.38.07.png?raw=true"
              alt="screenshot of Dinner Time"
            />{" "}
          </div>
        </div>
      </div>

      <div className="drum-kit" id="drum-kit">
        <div className="drum-kit-container">
          <div className="drum-kit-columns-container">
            <div className="drum-kit-text-column">
              <h3 className="drum-kit-h3">Drum Kit</h3>
              <p className="drum-kit-p">
                This project idea was undertaken as part of the{" "}
                <a href="https://javascript30.com/">javascript30</a> course by{" "}
                <a href="https://wesbos.com/">Wes Bos</a>. I personalised it by
                adding a metronome.
              </p>
              <div className="drum-kit-link-to-more">
                <a href="https://drum-kit.cph.kiwi/">
                  Visit the drum kit with metronome
                </a>
              </div>
            </div>
            <img
              src="https://raw.githubusercontent.com/cph-kiwi/cph-kiwi-images/master/Screenshot%202020-09-07%20at%2013.52.53.png"
              alt="screenshot of the drum kit with metronome"
            />{" "}
          </div>
        </div>
      </div>

      <div className="karen" id="karen">
        <div className="karen-container">
          <div className="karen-columns-container">
            <div className="karen-text-column">
              <h3 className="karen-h3">Karen Meier Rasmussen</h3>
              <p className="karen-p">
                I created a personal webpage for a client. This webpage features
                a guestbook where visitors can leave a message.
              </p>
              <div className="karen-link-to-more">
                <a href="https://karenmeierrasmussen.dk/">
                  Visit Karen Meier Rasmussen
                </a>
              </div>
            </div>
            <img
              src="https://raw.githubusercontent.com/cph-kiwi/cph-kiwi-images/master/Screenshot%202020-09-02%20at%2011.13.45.png"
              alt="screenshot of Karen Meier Rasmussens webpage"
            />{" "}
          </div>
        </div>
      </div>

      <div className="andreas-enterprises" id="andreas-enterprises">
        <div className="andreas-enterprises-container">
          <div className="andreas-enterprises-columns-container">
            <div className="andreas-enterprises-text-column">
              <h3 className="andreas-enterprises-h3">Andreas Enterprises</h3>
              <p className="andreas-enterprises-p">
                I created a personal webpage for a client. The client was keen
                to have a guestbook where visitors can leave a message.
              </p>
              <div className="andreas-enterprises-link-to-more">
                <a href="https://andreas.enterprises/">
                  Visit Andreas Enterprises
                </a>
              </div>
            </div>
            <img
              src="https://raw.githubusercontent.com/cph-kiwi/cph-kiwi-images/master/Screenshot%202020-09-02%20at%2011.13.11.png"
              alt="screenshot of Andreas Enterprises webpage"
            />{" "}
          </div>
        </div>
      </div>

      <div className="pig-latin" id="pig-latin">
        <div className="pig-latin-container">
          <div className="pig-latin-columns-container">
            <div className="pig-latin-text-column">
              <h3 className="pig-latin-h3">Pig Latin Translator</h3>
              <p className="pig-latin-p">
                My first personal project. An app that translates from English
                into Pig Latin (a fun, pseudo-language, mostly used by children
                in play).
              </p>
              <div className="pig-latin-link-to-more">
                <a href="https://pig-latin.cph.kiwi/">
                  Visit Pig Latin Translator
                </a>
              </div>
            </div>
            <img
              src="https://raw.githubusercontent.com/cph-kiwi/cph-kiwi-images/master/Screenshot%202020-08-06%20at%2021.53.10.png"
              alt="screenshot of pig latin translator app"
            />{" "}
          </div>
        </div>
      </div>

      <div className="about" id="about">
        <div className="about-container">
          <h5 className="about-h5">About me</h5>
          <div className="about-columns-container">
            <div className="about-text-column">
              <h3 className="about-h3">Beth Jackson</h3>
              <p className="about-p">
                I grew up in rural New Zealand, on a farm in Taranaki. I
                attended the University of Otago, where I studied psychology,
                philosophy, and human resources management. After completing my
                studies, I worked at the University of Otago as a librarian, and
                then as an administrative assistant. I worked in many different
                roles within university administration, at both the University
                of Otago in Dunedin and UCL in London. I lived in London for 7
                years, and then moved to Copenhagen. Currently I am studying web
                development and Danish, and looking for work in the tech sector.
              </p>
            </div>
            <img
              src="https://raw.githubusercontent.com/cph-kiwi/cph-kiwi-images/master/Profile%20picture.jpg"
              alt="Portrait of Beth Jackson"
            />{" "}
          </div>
        </div>
      </div>
      <div className="contact" id="contact">
        <div className="contact-container">
          <h5 className="contact-h5">Contact me</h5>
          <div className="contact-columns-container">
            <div className="contact-text-column">
              <h3 className="contact-h3">
                <a href="mailto:beth.jack@gmail.com" target="_blank">
                  beth.jack@gmail.com
                </a>
              </h3>
              <p className="contact-p">
                I am always keen to collaborate. I'm hoping to find a permanent
                position in the tech sector. Let's get in touch.
              </p>
              <div className="social-container">
                <a
                  href="https://www.linkedin.com/in/beth-jackson-4a29ab193/"
                  target="_blank"
                >
                  <LinkedInIcon />
                </a>

                <a href="https://github.com/cph-kiwi" target="_blank">
                  <GithubIcon />
                </a>
                <a href="https://twitter.com/cph_kiwi" target="_blank">
                  <TwitterIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <p className="footer-p">
          Handcrafted with care by <a href="https://cph.kiwi/">Beth Jackson</a>.
        </p>
      </div>
    </div>
  );
}

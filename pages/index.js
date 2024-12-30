import React from "react";
import {
	GithubIcon,
	TwitterIcon,
	LinkedInIcon,
	GitlabIcon,
	BlueSkyIcon,
} from "../src/Icons";
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
						I am a Frontend developer currently building an AI-powered
						literature review tool at Silvi.ai. Currently on the lookout for new
						challenges.
					</p>
					<div className="intro-link-to-more">
						<a href="#featured-projects">Check out my work</a>
					</div>
				</div>
			</div>

			<div className="silvi" id="silvi">
				<div className="silvi-container" id="featured-projects">
					<h5 className="silvi-h5">Featured projects</h5>
					<div className="silvi-columns-container">
						<div className="silvi-text-column">
							<h3 className="silvi-h3">Silvi</h3>
							<p className="silvi-p">
								I've been working at Silvi since April 2022 as a Frontend
								Software Developer. The app had been written in Vue.js by a
								consultancy before I started, and the current code base wasn't
								fit for purpose. We made the decision to rewrite the Frontend in
								React and TypeScript, using Redux for state management.
								<br />
								<br />
								My role has been to build out the Frontend, and to work closely
								with the Backend team to ensure the app is fully functional.
							</p>
							<ul className="tech-list">
								<li className="tech-list-item">HTML</li>
								<li className="tech-list-item">CSS</li>
								<li className="tech-list-item">JavaScript</li>
								<li className="tech-list-item">React</li>
								<li className="tech-list-item">Vue.js</li>
								<li className="tech-list-item">Nuxt</li>
								<li className="tech-list-item">Vite</li>
								<li className="tech-list-item">TypeScript</li>
								<li className="tech-list-item">Material UI</li>
								<li className="tech-list-item">Tailwind</li>
								<li className="tech-list-item">Redux</li>
								<li className="tech-list-item">GitLab</li>
								<li className="tech-list-item">Prisma</li>
							</ul>
							<div className="silvi-link-to-more">
								<a href="https://www.silvi.ai/">
									Visit the Silvi website to learn more about this literature
									review tool!
								</a>
							</div>
						</div>
						<img
							src="https://github.com/cph-kiwi/cph-kiwi-images/blob/master/Screenshot%202024-12-19%20at%2013.48.02.png?raw=true"
							alt="screenshot of the silvi website"
						/>
					</div>
				</div>
			</div>

			<div className="weather" id="weather">
				<div className="weather-container">
					<div className="weather-columns-container">
						<div className="weather-text-column">
							<h3 className="weather-h3">Weather app</h3>
							<p className="weather-p">
								I wrote this weather app in React using TypeScript and Next.js.
								I wanted the app to load with the user's current location's
								weather already loaded, so I had to figure out how to access the
								location of the user. I also filled out the backend by creating
								a proxy server to hide the api key.
							</p>
							<ul className="tech-list">
								<li className="tech-list-item">HTML</li>
								<li className="tech-list-item">CSS</li>
								<li className="tech-list-item">JavaScript</li>
								<li className="tech-list-item">Git</li>
								<li className="tech-list-item">React</li>
								<li className="tech-list-item">TypeScript</li>
								<li className="tech-list-item">Next.js</li>
								<li className="tech-list-item">Styled-components</li>
								<li className="tech-list-item">Vercel</li>
							</ul>
							<div className="weather-link-to-more">
								<a href="https://weather.cph.kiwi/">
									Visit the weather app and see the forecast for tomorrow!
								</a>
							</div>
							<div className="weather-link-to-more">
								<a href="https://github.com/cph-kiwi/weather">View source.</a>
							</div>
						</div>
						<img
							src="https://github.com/cph-kiwi/cph-kiwi-images/blob/master/Screenshot%202022-01-12%20at%2014.09.38.png?raw=true"
							alt="screenshot of the weather website"
						/>
					</div>
				</div>
			</div>

			<div className="guideit" id="guideit">
				<div className="guideit-container">
					<div className="guideit-columns-container">
						<div className="guideit-text-column">
							<h3 className="guideit-h3">GuideIT</h3>
							<p className="guideit-p">
								I worked on this GuideIT website as part of my final group
								project with Hack Your Future. I implemented the quiz
								functionality. This was my first project working in
								collaboration with other developers.
							</p>
							<ul className="tech-list">
								<li className="tech-list-item">HTML</li>
								<li className="tech-list-item">CSS</li>
								<li className="tech-list-item">JavaScript</li>
								<li className="tech-list-item">Git</li>
								<li className="tech-list-item">React</li>
								<li className="tech-list-item">Storybook</li>
								<li className="tech-list-item">Heroku</li>
								<li className="tech-list-item">Knex</li>
								<li className="tech-list-item">Firebase</li>
								<li className="tech-list-item">NodeJs</li>
								<li className="tech-list-item">MySQL</li>
								<li className="tech-list-item">Express</li>
								<li className="tech-list-item">Swagger</li>
								<li className="tech-list-item">Figma</li>
							</ul>
							<div className="guideit-link-to-more">
								<a href="https://guide-it-production.herokuapp.com/">
									Visit the GuideIT website and take the quiz!
								</a>
							</div>
							<div className="guideit-link-to-more">
								<a href="https://github.com/HackYourFuture-CPH/Guide-IT">
									View source.
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
							<ul className="tech-list">
								<li className="tech-list-item">HTML</li>
								<li className="tech-list-item">CSS</li>
								<li className="tech-list-item">JavaScript</li>
								<li className="tech-list-item">Git</li>
								<li className="tech-list-item">React</li>
								<li className="tech-list-item">Heroku</li>
								<li className="tech-list-item">NodeJs</li>
								<li className="tech-list-item">Postman</li>
								<li className="tech-list-item">MySQL</li>
								<li className="tech-list-item">Express</li>
								<li className="tech-list-item">Knex</li>
							</ul>
							<div className="meal-sharing-link-to-more">
								<a href="https://hyf-meal-sharing.herokuapp.com/">
									Visit Dinner Time!
								</a>
							</div>
							<div className="meal-sharing-link-to-more">
								<a href="https://github.com/cph-kiwi/meal-sharing">
									View source.
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
							<ul className="tech-list">
								<li className="tech-list-item">JavaScript</li>
								<li className="tech-list-item">HTML</li>
								<li className="tech-list-item">CSS</li>
								<li className="tech-list-item">Git</li>
								<li className="tech-list-item">Vercel</li>
							</ul>
							<div className="drum-kit-link-to-more">
								<a href="https://drum-kit.cph.kiwi/">
									Visit the drum kit with metronome
								</a>
							</div>
							<div className="drum-kit-link-to-more">
								<a href="https://github.com/cph-kiwi/personalised-drum-kit">
									View source.
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
							<ul className="tech-list">
								<li className="tech-list-item">HTML</li>
								<li className="tech-list-item">CSS</li>
								<li className="tech-list-item">JavaScript</li>
								<li className="tech-list-item">Git</li>
								<li className="tech-list-item">React</li>
								<li className="tech-list-item">Vercel</li>
								<li className="tech-list-item">Firebase</li>
							</ul>
							<div className="karen-link-to-more">
								<a href="https://karenmeierrasmussen.dk/">
									Visit Karen Meier Rasmussen
								</a>
							</div>
							<div className="karen-link-to-more">
								<a href="https://github.com/cph-kiwi/karen">View source.</a>
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
								to have a guestbook where visitors can leave a message so I used
								Firestore to set that up.
							</p>
							<ul className="tech-list">
								<li className="tech-list-item">HTML</li>
								<li className="tech-list-item">CSS</li>
								<li className="tech-list-item">JavaScript</li>
								<li className="tech-list-item">Git</li>
								<li className="tech-list-item">React</li>
								<li className="tech-list-item">Vercel</li>
								<li className="tech-list-item">Firebase</li>
							</ul>
							<div className="andreas-enterprises-link-to-more">
								<a href="https://andreas.social/">Visit Andreas Enterprises</a>
							</div>
							<div className="andreas-enterprises-link-to-more">
								<a href="https://github.com/cph-kiwi/andreas-moller">
									View source.
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
							<ul className="tech-list">
								<li className="tech-list-item">HTML</li>
								<li className="tech-list-item">CSS</li>
								<li className="tech-list-item">JavaScript</li>
								<li className="tech-list-item">Git</li>
								<li className="tech-list-item">React</li>
								<li className="tech-list-item">Vercel</li>
							</ul>
							<div className="pig-latin-link-to-more">
								<a href="https://pig-latin.cph.kiwi/">
									Visit Pig Latin Translator
								</a>
							</div>
							<div className="pig-latin-link-to-more">
								<a href="https://github.com/cph-kiwi/pig-latin-translator">
									View source.
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
								I'm a passionate Frontend Developer with a unique background,
								bringing a holistic approach to problem-solving and user
								experience. Growing up in rural New Zealand on a farm in
								Taranaki shaped my early years before I attended the University
								of Otago, where I earned two degrees studying Psychology,
								Philosophy, and Management.
								<br />
								<br />
								My professional journey began at the University of Otago, where
								University of Otago, where I worked in various administrative
								roles, including as a librarian and administrative assistant.
								This experience provided me with a strong foundation in
								organizational skills and attention to detail. Seeking new
								opportunities, I moved to London and continued my administrative
								career at UCL, gaining valuable international experience over
								seven years and broadening my perspective.
								<br />
								<br />
								In January 2020, I decided to pivot my career towards something
								more fulfilling and started learning to code through free online
								resources. My dedication and passion for technology led me to
								HackYourFuture, an intensive coding bootcamp, where I honed my
								skills in web development.
								<br />
								<br />
								After London, I moved to Copenhagen, where I joined Silvi.ai, a
								small startup. While working there, I've been able to leverage
								my frontend development skills to create impactful and
								user-friendly web applications. Although Silvi has since run
								into funding challenges, I remain continuously inspired by the
								ever-evolving tech landscape and am committed to lifelong
								learning and professional growth as I seek new opportunities in
								the tech sector.
							</p>
						</div>
						<img
							src="https://github.com/cph-kiwi/cph-kiwi-images/blob/master/profess_profile_pic%20compressed.JPG?raw=true"
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
								<a href="https://www.linkedin.com/in/cph-kiwi/" target="_blank">
									<LinkedInIcon />
								</a>

								<a href="https://github.com/cph-kiwi" target="_blank">
									<GithubIcon />
								</a>
								<a href="https://gitlab.com/bj.silvi" target="_blank">
									<GitlabIcon />
								</a>
								<a href="https://twitter.com/cph_kiwi" target="_blank">
									<TwitterIcon />
								</a>
								<a href="https://bsky.app/profile/cph.kiwi" target="_blank">
									<BlueSkyIcon />
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

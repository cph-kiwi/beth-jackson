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
import Project from "../src/components/Project";
import { projects } from "../src/data/projects";

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

			{projects.map((project, index) => (
				<Project
					key={project.id}
					project={project}
					isAlternate={index % 2 === 1}
					isFirst={index === 0}
				/>
			))}

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

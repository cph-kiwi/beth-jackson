import React, { useEffect, useState } from 'react';
import './styles.css';

export default function App() {
	const [scrollOffSet, setScrollOffSet] = useState(0);

	useEffect(() => {
		let handler = (e) => setScrollOffSet(window.scrollY);
		window.addEventListener('scroll', handler, {
			passive: true,
		});
		return () =>
			window.removeEventListener('scroll', handler);
	}, []);

	let headerAlpha = Math.min(0.5, scrollOffSet / 300);
	let menuBrightness = Math.min(255, scrollOffSet);

	return (
		<div className="App">
			<a id="top" />
			<header
				className="main-header"
				style={{ background: `rgba(0,0,0,${headerAlpha})` }}
			>
				<div className="main-header-logo">
					<a href="#top">B.</a>
				</div>
				<nav className="main-nav">
					<ul
						className="main-nav-list"
						style={{
							color: `rgb(${menuBrightness}, ${menuBrightness}, ${menuBrightness})`,
						}}
					>
						<li className="hide">
							<a href="#page2">Portfolio</a>
						</li>
						<li className="hide">
							<a href="#about">About</a>
						</li>
						<li>
							<a href="/Beth Jackson Moller CV and cover letter 15-01-2020.pdf">
								Resume
							</a>
						</li>
						<li className="hide">
							<a href="#">Blog</a>
						</li>
						<li>
							<a href="#contact">Contact</a>
						</li>
					</ul>
				</nav>
			</header>
			<div className="intro">
				<div className="intro-container">
					<h1 className="intro-h1">Hi, I'm Beth.</h1>
					<h2 className="intro-h2">Web developer.</h2>
					<p className="intro-p">
						Currently based in Copenhagen, Denmark, studying
						Danish and web development. I have focused on
						HTML, CSS, Javascript and React to start with,
						and continue to study and work on private
						projects.
					</p>
					<div className="intro-link-to-more">
						<a href="#page2">Check out my work</a>
					</div>
				</div>
			</div>
			<div className="page2" id="page2">
				<div className="page2-container">
					<h5 className="page2-h5">Featured projects</h5>
					<div className="page2-columns-container">
						<div className="page2-text-column">
							<h3 className="page2-h3">
								Pig Latin Translator
							</h3>
							<p className="page2-p">
								My first personal project. An app that
								translates from English into Pig Latin (a
								fun, pseudo-language, mostly used by
								children in play).
							</p>
							<div className="page2-link-to-more">
								<a href="https://pig-latin.cph.kiwi/">
									Visit Pig Latin Translator
								</a>
							</div>
						</div>
						<img
							src="https://raw.githubusercontent.com/cph-kiwi/cph-kiwi-images/master/Screenshot%202020-08-06%20at%2021.53.10.png"
							alt="screenshot of pig latin translator app"
						/>{' '}
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
								I grew up in rural New Zealand, on a farm in
								Taranaki. I attended the University of
								Otago, where I studied psychology,
								philosophy, and human resources management.
								After completing my studies, I worked at the
								University of Otago as a librarian, and then
								as an administrative assistant. I worked in
								many different roles within university
								administration, at both the University of
								Otago in Dunedin and UCL in London. I lived
								in London for 7 years, and then moved to
								Copenhagen. Currently I am studying web
								development and Danish, and looking for work
								in the tech sector.
							</p>
						</div>
						<img
							src="https://raw.githubusercontent.com/cph-kiwi/cph-kiwi-images/master/Profile%20picture.jpg"
							alt="Portrait of Beth Jackson"
						/>{' '}
					</div>
				</div>
			</div>
			<div className="contact" id="contact">
				<div className="contact-container">
					<h5 className="contact-h5">Contact me</h5>
					<div className="contact-columns-container">
						<div className="contact-text-column">
							<h3 className="contact-h3">
								<a
									href="mailto:beth.jack@gmail.com"
									target="_blank"
								>
									beth.jack@gmail.com
								</a>
							</h3>
							<p className="contact-p">
								I am always keen to collaborate. I'm hoping
								to find a permanent position in the tech
								sector. Let's get in touch.
							</p>
							<div className="social-container">
								<a
									href="https://www.linkedin.com/in/beth-jackson-4a29ab193/"
									target="_blank"
								>
									{' '}
									<img
										src="https://yt3.ggpht.com/-CepHHHB3l1Y/AAAAAAAAAAI/AAAAAAAAAAA/Z8MftqWbEqA/s900-c-k-no/photo.jpg"
										alt="linkedin logo"
									/>{' '}
								</a>

								<a
									href="https://github.com/cph-kiwi"
									target="_blank"
								>
									{' '}
									<img
										src="https://raw.githubusercontent.com/cph-kiwi/cph-kiwi-images/master/GitHub-Mark-32px.png"
										alt="GitHub logo"
									/>{' '}
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer">
				<p className="footer-p">
					This site is hand-crafted, with care.
					<br />
					Copyright © Beth Jackson.
				</p>
			</div>
		</div>
	);
}

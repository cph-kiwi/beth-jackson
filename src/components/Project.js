import React from "react";

const Project = ({ project, isAlternate, isFirst }) => {
	const { id, title, description, technologies, links, image, imageAlt } =
		project;

	return (
		<div
			className={`project ${isAlternate ? "project-alternate" : ""}`}
			id={isFirst ? "featured-projects" : id}
		>
			<div className="project-container">
				{isFirst && <h5 className="section-h5">Featured projects</h5>}
				<div
					className={`project-columns-container ${
						isAlternate ? "project-columns-reverse" : ""
					}`}
				>
					<div className="project-text-column">
						<h3 className="project-title">{title}</h3>
						<p className="project-description">
							{description.split("\n").map((paragraph, index) => (
								<React.Fragment key={index}>
									{paragraph}
									{index < description.split("\n").length - 1 && (
										<>
											<br />
											<br />
										</>
									)}
								</React.Fragment>
							))}
						</p>
						<ul className="tech-list">
							{technologies.map((tech, index) => (
								<li key={index} className="tech-list-item">
									{tech}
								</li>
							))}
						</ul>
						{links.map((link, index) => (
							<div key={index} className="project-link">
								<a href={link.url}>{link.text}</a>
							</div>
						))}
					</div>
					<img src={image} alt={imageAlt} className="project-image" />
				</div>
			</div>
		</div>
	);
};

export default Project;

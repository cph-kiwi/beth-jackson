import React from "react";

const ProjectDetail = ({ project }) => {
	const { title, description, technologies, links, image, imageAlt } = project;

	return (
		<div className="project-detail">
			<div className="project-detail-container">
				<h1 className="project-detail-title">{title}</h1>

				<div className="project-detail-content">
					<div className="project-detail-image">
						<img src={image} alt={imageAlt} />
					</div>

					<div className="project-detail-info">
						<div className="project-detail-description">
							{description.split("\n").map((paragraph, index) => (
								<p key={index}>{paragraph}</p>
							))}
						</div>

						<div className="project-detail-technologies">
							<h3>Technologies Used</h3>
							<ul className="tech-list">
								{technologies.map((tech, index) => (
									<li key={index} className="tech-list-item">
										{tech}
									</li>
								))}
							</ul>
						</div>

						<div className="project-detail-links">
							{links.map((link, index) => (
								<div key={index} className="project-link">
									<a href={link.url} target="_blank" rel="noopener noreferrer">
										{link.text}
									</a>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectDetail;

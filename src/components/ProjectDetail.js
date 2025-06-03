import { test } from "gray-matter";
import React from "react";

const ProjectDetail = ({ project }) => {
	const { title, introduction, technologies, links, image, imageAlt } = project;

	return (
		<div className="project-detail">
			<div className="project-detail-container">
				<h1 className="project-detail-title">{title}</h1>

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

				<div className="project-detail-content">
					<div className="project-detail-image">
						<img src={image} alt={imageAlt} />
					</div>

					<div className="project-detail-info">
						<div className="project-detail-introduction">
							{introduction.split("\n").map((paragraph, index) => (
								<p key={index}>{paragraph}</p>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectDetail;

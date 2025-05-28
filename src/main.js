import { projects } from "./projects.js";
import { Project } from "./Project.js";

document.addEventListener("DOMContentLoaded", () => {
	const projectsContainer = document.getElementById("projects-container");

	projects.forEach((project) => {
		const projectComponent = new Project(project);
		projectsContainer.appendChild(projectComponent.render());
	});
});

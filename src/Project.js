export class Project {
	constructor(project) {
		this.project = project;
	}

	render() {
		const projectElement = document.createElement("div");
		projectElement.className = `project ${
			this.project.isAlternate ? "project-alternate" : ""
		}`;
		if (this.project.id) {
			projectElement.id = this.project.id;
		}

		const columnsContainer = document.createElement("div");
		columnsContainer.className = `project-columns-container ${
			this.project.isAlternate ? "project-columns-reverse" : ""
		}`;

		const textColumn = document.createElement("div");
		textColumn.className = "project-text-column";

		const title = document.createElement("h3");
		title.className = "project-title";
		title.textContent = this.project.title;

		const description = document.createElement("p");
		description.className = "project-description";
		description.textContent = this.project.description;

		const link = document.createElement("div");
		link.className = "project-link";
		const linkAnchor = document.createElement("a");
		linkAnchor.href = this.project.link;
		linkAnchor.textContent = "View Project →";
		link.appendChild(linkAnchor);

		const techList = document.createElement("ul");
		techList.className = "tech-list";
		this.project.technologies.forEach((tech) => {
			const techItem = document.createElement("li");
			techItem.className = "tech-list-item";
			techItem.textContent = tech;
			techList.appendChild(techItem);
		});

		textColumn.appendChild(title);
		textColumn.appendChild(description);
		textColumn.appendChild(link);
		textColumn.appendChild(techList);

		const imageColumn = document.createElement("div");
		imageColumn.className = "project-image";
		const image = document.createElement("img");
		image.src = this.project.image;
		image.alt = `${this.project.title} screenshot`;
		imageColumn.appendChild(image);

		columnsContainer.appendChild(textColumn);
		columnsContainer.appendChild(imageColumn);
		projectElement.appendChild(columnsContainer);

		return projectElement;
	}
}

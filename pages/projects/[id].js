import { useRouter } from "next/router";
import Head from "next/head";
import { Navigation } from "../../src/Navigation";
import ProjectDetail from "../../src/components/ProjectDetail";
import { projects } from "../../src/data/projects";

export default function ProjectPage() {
	const router = useRouter();
	const { id } = router.query;

	const project = projects.find((p) => p.id === id);

	if (!project) {
		return <div>Project not found</div>;
	}

	return (
		<div className="App">
			<Head>
				<title>{project.title} - Beth Jackson</title>
				<link
					href="https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Playfair+Display:wght@800&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<Navigation />
			<ProjectDetail project={project} />
		</div>
	);
}

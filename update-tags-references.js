const fs = require("fs");
const path = require("path");

const blogPostsDir = "./blog-posts";

function updateBlogPost(filePath) {
	const content = fs.readFileSync(filePath, "utf8");

	// Check if the file already has the correct pattern
	if (content.includes("<ClickableTags tags={tags} />")) {
		console.log(
			`Skipping ${filePath} - already has correct tags={tags} format`
		);
		return;
	}

	// Find the ClickableTags component with hardcoded tags
	const tagsMatch = content.match(/<ClickableTags\s+tags=\{[^}]+\}\s*\/>/);
	if (!tagsMatch) {
		console.log(`No ClickableTags found in ${filePath}`);
		return;
	}

	// Replace the hardcoded tags with tags={tags}
	const newContent = content.replace(
		/<ClickableTags\s+tags=\{[^}]+\}\s*\/>/g,
		"<ClickableTags tags={tags} />"
	);

	// Write the updated content back to the file
	fs.writeFileSync(filePath, newContent);
	console.log(`Updated ${filePath} to use tags={tags}`);
}

function main() {
	const files = fs.readdirSync(blogPostsDir);

	files.forEach((file) => {
		if (file.endsWith(".mdx")) {
			const filePath = path.join(blogPostsDir, file);
			updateBlogPost(filePath);
		}
	});

	console.log("All blog posts updated to use tags={tags}!");
}

main();

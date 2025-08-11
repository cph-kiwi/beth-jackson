const fs = require("fs");
const path = require("path");

const blogPostsDir = "./blog-posts";

function fixBlogPost(filePath) {
	const content = fs.readFileSync(filePath, "utf8");

	// Check if the file has the incorrect pattern
	if (content.includes("<BlogTextWrapper>\n\n<ClickableTags")) {
		console.log(
			`Fixing ${filePath} - removing incorrect BlogTextWrapper wrapping`
		);

		// Replace the incorrect pattern with just ClickableTags
		const newContent = content.replace(
			/<BlogTextWrapper>\n\n<ClickableTags([^>]+) \/>\n<\/BlogTextWrapper>/g,
			"<ClickableTags$1 />"
		);

		// Write the updated content back to the file
		fs.writeFileSync(filePath, newContent);
		console.log(`Fixed ${filePath}`);
	} else {
		console.log(`Skipping ${filePath} - no incorrect wrapping found`);
	}
}

function main() {
	const files = fs.readdirSync(blogPostsDir);

	files.forEach((file) => {
		if (file.endsWith(".mdx")) {
			const filePath = path.join(blogPostsDir, file);
			fixBlogPost(filePath);
		}
	});

	console.log("All blog posts checked and fixed!");
}

main();

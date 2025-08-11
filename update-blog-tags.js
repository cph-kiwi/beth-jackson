const fs = require('fs');
const path = require('path');

const blogPostsDir = './blog-posts';

function updateBlogPost(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Check if the file already has ClickableTags
  if (content.includes('<ClickableTags')) {
    console.log(`Skipping ${filePath} - already updated`);
    return;
  }
  
  // Find the tags section
  const tagsMatch = content.match(/### Tags\s*\n\s*((?:- [^\n]+\n?)+)/);
  if (!tagsMatch) {
    console.log(`No tags section found in ${filePath}`);
    return;
  }
  
  // Extract the tags from the markdown list
  const tagsText = tagsMatch[1];
  const tags = tagsText
    .split('\n')
    .filter(line => line.trim().startsWith('- '))
    .map(line => line.trim().substring(2).trim());
  
  // Create the new ClickableTags component
  const newTagsSection = `<ClickableTags tags={${JSON.stringify(tags)}} />`;
  
  // Replace the entire tags section
  const newContent = content.replace(
    /### Tags\s*\n\s*((?:- [^\n]+\n?)+)/,
    newTagsSection
  );
  
  // Write the updated content back to the file
  fs.writeFileSync(filePath, newContent);
  console.log(`Updated ${filePath} with ClickableTags`);
}

function main() {
  const files = fs.readdirSync(blogPostsDir);
  
  files.forEach(file => {
    if (file.endsWith('.mdx')) {
      const filePath = path.join(blogPostsDir, file);
      updateBlogPost(filePath);
    }
  });
  
  console.log('All blog posts updated!');
}

main();

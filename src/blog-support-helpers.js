import matter from "gray-matter";
import { join } from "path";
import fs from "fs";

const blogDirectory = join(process.cwd(), "blog-posts");

export function getBlogBySlug(slug) {
  const fullPath = join(blogDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  return matter(fileContents);
}

export function getAllPosts() {
  const files = fs.readdirSync(blogDirectory);
  const slugs = files.map((file) => file.replace(".mdx", ""));
  return slugs;
}

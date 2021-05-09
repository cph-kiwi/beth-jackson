import matter from "gray-matter";
import { join } from "path";
import fs from "fs";

const blogDirectory = join(process.cwd(), "blog-posts");

export function getBlogBySlug(slug) {
  const fullPath = join(blogDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return { data: { ...data, published: data.published.toJSON() }, content };
}

export function getAllPosts() {
  const files = fs.readdirSync(blogDirectory);
  const slugs = files.map((file) => file.replace(".mdx", ""));
  return slugs;
}

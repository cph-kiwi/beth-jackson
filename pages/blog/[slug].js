import React from "react";
import Head from "next/head";
import { Navigation } from "../../src/Navigation";

import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { getAllPosts, getBlogBySlug } from "../../src/blog-support-helpers";
import { Timer } from "../../src/components/Timer";
import { BlogTextWrapper } from "../../src/components/BlogTextWrapper";

const components = { Timer, BlogTextWrapper };

export async function getStaticProps({ params }) {
	const { data, content } = getBlogBySlug(params.slug);

	console.log(data);
	const mdxSource = await serialize(content, {
		components,
		// Optionally pass remark/rehype plugins
		mdxOptions: {
			remarkPlugins: [],
			rehypePlugins: [],
		},

		scope: data,
	});

	return {
		props: {
			source: mdxSource,
			meta: data,
		},
	};
}

export default function BlogPost({ source, meta }) {
	// console.log(source, meta);

	return (
		<div>
			<Head>
				<title>Beth Jackson - Blog post</title>
				<link
					href="https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Playfair+Display:wght@800&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Lato:wght@900&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<a id="top" />
			<Navigation />
			<div className="blog-post-wrapper">
				<div className="blog-post-contents">
					{<MDXRemote {...source} components={components} />}
				</div>
			</div>
		</div>
	);
}

export async function getStaticPaths() {
	const posts = getAllPosts();
	// console.log(posts);
	return {
		paths: posts.map((slug) => {
			return {
				params: {
					slug,
				},
			};
		}),
		fallback: false,
	};
}

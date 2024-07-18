import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { Navigation } from "../../src/Navigation";
import { getBlogBySlug, getAllPosts } from "../../src/blog-support-helpers";

export async function getStaticProps() {
	const posts = getAllPosts();
	return {
		props: {
			posts: posts
				.map((slug) => {
					const { data } = getBlogBySlug(slug);
					return data;
				})
				.sort((a, b) => {
					if (a.published > b.published) {
						return -1;
					} else {
						return 1;
					}
				}),
		},
	};
}

export default function Blog({ posts }) {
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredPosts, setFilteredPosts] = useState(posts);
	const [isSearched, setIsSearched] = useState(false);

	const suggestedSearches = [
		"Breakfast",
		"Broccoli",
		"Christmas",
		"Eggs",
		"Salad",
		"Pumpkin",
	];

	const handleSearch = (term = searchTerm) => {
		const searchTerm = term.toLowerCase();
		const filtered = posts.filter((post) => {
			const titleMatch = post.title.toLowerCase().includes(searchTerm);
			const tagMatch = post.tags.some((tag) =>
				tag.toLowerCase().includes(searchTerm)
			);
			const ingredientMatch = post.ingredients.some((ingredient) =>
				ingredient.toLowerCase().includes(searchTerm)
			);

			return titleMatch || tagMatch || ingredientMatch;
		});

		setFilteredPosts(filtered);
		setIsSearched(true);
	};

	const handleKeyDown = (event) => {
		if (searchTerm === "") {
			setIsSearched(false);
		}
		if (event.key === "Enter") {
			handleSearch();
		}
	};

	const handleSuggestedSearch = (term) => {
		setSearchTerm(term);
		handleSearch(term);
	};

	const uniqueTags = [...new Set(posts.flatMap((post) => post.tags))].sort(
		(a, b) => a.localeCompare(b)
	);

	const tagsPerColumn = Math.ceil(uniqueTags.length / 3);

	const columns = [
		uniqueTags.slice(0, tagsPerColumn),
		uniqueTags.slice(tagsPerColumn, tagsPerColumn * 2),
		uniqueTags.slice(tagsPerColumn * 2),
	];

	return (
		<div className="Blog">
			<Head>
				<title>Beth Jackson - Blog</title>
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
			<div className="blog-contents-page">
				<h1 className="blog-main-heading">CPH-Kiwi's recipes</h1>
				<p className="blog-text-wrapper">
					I created this blog as a project to contribute toward my portfolio. I
					have made some components to add to the complexity of the project,
					such as the timer. I know many people would look to package products
					to create a blog, but everything is custom built here. I wrote this
					using React and Next.js. The website is deployed using Vercel. I write
					the blog in mdx.
				</p>
				<p className="blog-text-wrapper">
					I have a terrible memory. I make pancakes every weekend, and I still
					have to look up the recipe. After reading a whole bunch of
					organisational books, I have discovered that this isn't a bad thing.
					By writing everything down and not trying to memorise everything, I am
					reducing cognitive load. This is what I tell myself to feel better,
					anyway. In any case, I can't remember how to make porridge from one
					winter to the next, so I'm writing all my recipes here. This is more
					for me than anyone else, but I wish you happy browsing.
				</p>

				<div className="blog-search-container">
					<div className="blog-search-container-top">
						<div className="blog-search-wrapper">
							<input
								type="text"
								placeholder="Search blog posts..."
								className="blog-search-input"
								id="blog-search"
								name="blog-search"
								value={searchTerm}
								onChange={(event) => {
									setSearchTerm(event.target.value);
								}}
								onKeyDown={handleKeyDown}
							/>
							<button
								type="button"
								className="search-button"
								onClick={handleSearch}
							>
								Search
							</button>
						</div>
					</div>
					<div className="blog-search-container-bottom">
						<div className="blog-search-container-bottom-left">
							{searchTerm === "" && (
								<>
									<h3>Suggested searches:</h3>
									<ul className="blog-search-suggestions">
										{suggestedSearches.map((term, index) => (
											<li
												className="blog-li"
												key={index}
												onClick={() => handleSuggestedSearch(term)}
											>
												{term}
											</li>
										))}
									</ul>
								</>
							)}
							{isSearched && searchTerm !== "" && (
								<>
									<h3>Search results:</h3>
									<ul className="blog-search-results">
										{filteredPosts.length > 0 ? (
											filteredPosts.map((post) => (
												<li key={post.id} className="blog-li">
													<Link legacyBehavior href={`/blog/${post.slug}`}>
														<a>{post.title}</a>
													</Link>
												</li>
											))
										) : (
											<li>No matching posts found</li>
										)}
									</ul>
								</>
							)}
						</div>
						<div className="blog-search-container-bottom-right">
							<h3>Tags:</h3>
							<div className="blog-tags-columns">
								{columns.map((column, index) => (
									<ul key={index} className="blog-search-tags">
										{column.map((tag) => (
											<li
												key={tag}
												className="blog-li"
												onClick={() => handleSuggestedSearch(tag)}
											>
												{tag}
											</li>
										))}
									</ul>
								))}
							</div>
						</div>
					</div>
				</div>

				<ul className="blog-ul-wrapper">
					{posts.map((post) => {
						return (
							<li key={post.id} className="blog-li">
								<Link legacyBehavior href={`/blog/${post.slug}`}>
									<a>{post.title}</a>
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

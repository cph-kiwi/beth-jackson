import Link from "next/link";

export const ClickableTags = ({ tags = [] }) => {
	return (
		<div className="blog-text-wrapper">
			<h3>Tags</h3>
			<ul>
				{(tags || []).map((tag) => (
					<li key={tag}>
						<Link
							legacyBehavior
							key={tag}
							href={`/blog?tag=${encodeURIComponent(tag)}`}
						>
							<a>{tag}</a>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

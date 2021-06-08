import React from "react";
import Head from "next/head";
import { Navigation } from "../../src/Navigation";

import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import { getAllPosts, getBlogBySlug } from "../../src/blog-support-helpers";
import { Timer } from "../../src/components/Timer";

const components = { Timer };

export async function getStaticProps({ params }) {
  const { data, content } = getBlogBySlug(params.slug);

  console.log(data);
  const mdxSource = await renderToString(content, {
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
  const content = hydrate(source, { components });
  return (
    <div className="blog-post-outer">
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
      <div className="blog-post-body">
        <h1 className="blog-post-outer-heading">CPH-Kiwi's recipes</h1>
        <div className="blog-post-mdx">{content}</div>
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

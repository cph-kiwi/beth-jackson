import React from "react";
import Head from "next/head";
import { Navigation } from "../../src/Navigation";

export async function getStaticProps({ params }) {
  const { data, content } = getBlogBySlug(params.slug);

  const mdxSource = await renderToString(content, {
    components,
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },

    scope: { ...data, published: data.published.toJSON() },
  });

  return {
    props: {
      source: mdxSource,
      meta: { ...data, published: data.published.toJSON() },
    },
  };
}

export default function Blog(props) {
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
      <div className="blog-main">
        <div className="blog-container">
          <h1 className="blog-h1">Beth's blog.</h1>
          <h2 className="blog-p">
            I have a terrible memory. I make pancakes every weekend, and I still
            have to look up the recipe. After reading a whole bunch of
            organisational books, I have discovered that this isn't a bad thing.
            By writing everything down and not trying to memorise everything, I
            am reducing cognitive load. In any case, I can't remember how to
            make porridge from one winter to the next, so I'm writing all my
            recipes here. This is more for me than anyone else, but happy
            browsing.
          </h2>
          <h3 className="blog-h3">Blog entry title</h3>
          <p className="blog-p">Blog text</p>
        </div>
      </div>
    </div>
  );
}

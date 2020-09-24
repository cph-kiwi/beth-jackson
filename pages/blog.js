import React from "react";
import Head from "next/head";
import { Navigation } from "../src/Navigation";

export default function Blog() {
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
          <h2 className="blog-h2">
            My web development journey from the very beginning.
          </h2>
          <h3 className="blog-h3">Blog entry title</h3>
          <p className="blog-p">Blog text</p>
        </div>
      </div>
    </div>
  );
}

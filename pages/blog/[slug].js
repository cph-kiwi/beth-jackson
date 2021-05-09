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
  console.log(source, meta);
  const content = hydrate(source, { components });
  return (
    <div className="blog-post-outer">
      <h1 className="blog-post-outer-heading">CPH-Kiwi's recipes</h1>
      <div className="blog-post-mdx">{content}</div>
    </div>
  );
}

export async function getStaticPaths() {
  const posts = getAllPosts();
  console.log(posts);
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

// export default function BlogPost(props) {
//   console.log(props);
//   return <div>Hello Beth</div>;
// }

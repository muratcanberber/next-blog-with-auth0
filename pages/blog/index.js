import { getAllNodes } from "next-mdx/server";
import Link from "next/link";
function BlogPage({ posts }) {
  console.log(posts);
  return (
    <div className="site-container">
      <div className="space-y-4">
        {posts.map((post) => {
          return (
            <article
              key={post.url}
              className="bg-gray-100 hover:bg-gray-200 rounded-2xl  p-2"
            >
              <Link href={post.url}>
                <div>
                  <h2 className="text-xl font-bold">
                    {post.frontMatter.title}
                  </h2>
                  <p>{post.frontMatter.excerpt}</p>
                  <div className="text-gray-400">
                    <span>{post.frontMatter.date}</span>
                  </div>
                </div>
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default BlogPage;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllNodes("post"),
    },
  };
}

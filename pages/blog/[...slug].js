import { getMdxNode, getMdxPaths } from "next-mdx/server";
import { useHydrate } from "next-mdx/client";
import { mdxComponents } from "../../components/mdx-components";
import { useAuth0 } from "@auth0/auth0-react";

function PostPage({ post }) {
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
  const content = useHydrate(post, {
    components: mdxComponents,
  });

  return (
    <div className="site-container">
      <article>
        <h1 className="text-4xl font-bold mb-2 italic">
          {post.frontMatter.title}
        </h1>
        <p>{post.frontMatter.excerpt}</p>
        <hr className="my-4" />
        <div className="prose">{content}</div>
      </article>

      <textarea rows="3" className="border w-full block px-2 py-1 rounded-xl" />
      {isAuthenticated ? (
        <div className="flex items-center space-x-3">
          <button className="bg-blue-600 text-white px-2 py-1 rounded m-2">
            Send
          </button>
          <img src={user.picture} width={36} className="rounded-full"></img>
          <span>{user.name}</span>
          <button
            className="w-8 h-8 rounded-full bg-red-700 text-white text-lg font-extrabold"
            onClick={() =>
              logout({ returnTo: process.env.NEXT_PUBLIC_URL + "/blog" })
            }
          >
            x
          </button>
        </div>
      ) : (
        <button
          className="bg-green-600 text-white px-2 py-1 rounded m-2"
          onClick={() => loginWithRedirect()}
        >
          Log In
        </button>
      )}
    </div>
  );
}

export default PostPage;

export async function getStaticPaths() {
  return {
    paths: await getMdxPaths("post"),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const post = await getMdxNode("post", context);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
}

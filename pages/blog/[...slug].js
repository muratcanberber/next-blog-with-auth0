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

      <textarea rows="3" className="border-2 rounded-xl" />
      {isAuthenticated ? (
        <div className="flex items-center space-x-3">
          <button>Send</button>
          <img src={user.picture} width={36} className="rounded-full"></img>
          <span>{user.name}</span>
          <button
            className="bg-red-800 rounded-3xl p-2 m-2 text-white mt-4"
            onClick={() =>
              logout({ returnTo: process.env.NEXT_PUBLIC_URL + "/blog" })
            }
          >
            x
          </button>
        </div>
      ) : (
        <button
          className="bg-green-800 text-white mt-4"
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

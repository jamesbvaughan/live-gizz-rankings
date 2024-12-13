import Link from "next/link";

import { getBlogPosts } from "./utils";

function BlogPosts() {
  const allBlogs = getBlogPosts();

  return (
    <div>
      {allBlogs
        .sort(
          (a, b) =>
            new Date(a.metadata.publishedAt).getTime() -
            new Date(b.metadata.publishedAt).getTime(),
        )
        .map((post) => (
          <Link
            key={post.slug}
            className="inline-flex text-lg no-underline"
            href={`/blog/${post.slug}`}
          >
            <p className="w-[120px] tabular-nums text-muted">
              {post.metadata.publishedAt}
            </p>

            <p>{post.metadata.title}</p>
          </Link>
        ))}
    </div>
  );
}

export default function BlogPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-semibold">Blog</h1>

      <BlogPosts />
    </div>
  );
}

import Link from "next/link";

import { PageContent, PageTitle } from "@/components/ui";

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
            <p className="text-muted w-[120px] tabular-nums">
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
    <>
      <PageTitle>Blog</PageTitle>

      <PageContent>
        <BlogPosts />
      </PageContent>
    </>
  );
}

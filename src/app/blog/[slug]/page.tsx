import { evaluate } from "@mdx-js/mdx";
import Link from "next/link";
import { notFound } from "next/navigation";
import * as runtime from "react/jsx-runtime";

import { getBlogPosts } from "../utils";

export async function generateStaticParams() {
  const posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export const dynamicParams = false;

interface Params {
  slug: string;
}

interface Props {
  params: Promise<Params>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPosts().find((post) => post.slug === slug);
  if (!post) {
    notFound();
  }

  const { title, publishedAt: publishedTime, description } = post.metadata;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPosts().find((post) => post.slug === slug);
  if (!post) {
    notFound();
  }

  const { default: MDXContent } = await evaluate(post.content, runtime);

  const date = new Date(post.metadata.publishedAt);
  const formattedDate = new Intl.DateTimeFormat(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(date);

  return (
    <section className="space-y-8">
      <div className="space-y-2">
        <Link href="/blog" className="font-bold text-muted no-underline">
          Blog
        </Link>

        <h1 className="text-4xl font-semibold sm:text-5xl">
          {post.metadata.title}
        </h1>

        <time className="inline-block italic text-muted">{formattedDate}</time>
      </div>

      <article className="prose prose-xl prose-stone prose-invert leading-6">
        <MDXContent />
      </article>
    </section>
  );
}

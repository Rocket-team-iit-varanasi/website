// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  return [
    { slug: "sugar-rocket-engine" },
    { slug: "wireless-ignitor" },
    // Add more slugs as needed
  ];
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const posts = [
    {
      title: "Building a sugar rocket engine",
      author: "Govind Singh",
      date: "2025-01-30",
      content: "Sugar rocket engine guide...",
      slug: "sugar-rocket-engine",
    },
    {
      title: "Building a wireless ignitor",
      author: "Dipti Rupwate",
      date: "2025-02-07",
      content: "Wireless ignition system...",
      slug: "wireless-ignitor",
    },
  ];

  const post = posts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
      <p className="text-gray-600 mb-6">
        By {post.author} on {new Date(post.date).toLocaleDateString("en-US")}
      </p>
      <p>{post.content}</p>
      <div className="mt-8">
        <Link href="/blog" className="text-blue-500 hover:underline">
          Back to Articles
        </Link>
      </div>
    </div>
  );
}
import Link from 'next/link';

const posts = [
  {
    title: "Building a sugar rocket engine",
    author: "Govind Singh",
    date: "2025-1-30",
    content: "Sugar rocket engine guide - from cooking to testing...",
    slug: "sugar-rocket-engine"
  },
  {
    title: "Building a wireless ignitor",
    author: "Dipti Rupwate",
    date: "2025-2-7",
    content: "Building a wireless controlled sugar rocket ignition system...",
    slug: "wireless-ignitor"
  },
  // Add more posts as needed
];

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8">Latest News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">
              {post.content}
            </p>
            <Link
              href={`/blog/${post.slug}`}
              className="text-blue-500 hover:underline"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
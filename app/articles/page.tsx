import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">
      {/* Page Title */}
      <h1 className="section-title">Latest Posts</h1>

      {/* Posts Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {allPosts.map((post) => (
          <article
            key={post._id}
            className="card group flex flex-col justify-between"
          >
            <div className="space-y-3">
              <Link href={post.slug}>
                <h2 className="text-xl font-semibold text-blue-600 group-hover:underline">
                  {post.title}
                </h2>
              </Link>

              {post.description && (
                <p className="paragraph">{post.description}</p>
              )}
            </div>

            <div className="pt-4">
              <Link href={post.slug} className="btn-secondary">
                Read More
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

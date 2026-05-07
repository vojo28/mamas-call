import Image from "next/image"
import Link from "next/link"

import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"

export const revalidate = 60

const query = groq`
*[_type == "post"]
| order(publishedAt desc){
  title,
  excerpt,
  readTime,
  "slug": slug.current,
  "image": coalesce(mainImage.asset->url, "/placeholder.jpg"),
  "category": coalesce(category->title, "General")
}
`

export const metadata = {
  title: "All Articles | Mama’s Call",
  description:
    "Browse all pregnancy, childbirth, maternal health, newborn care, and women’s health resources from Mama’s Call.",
}

export default async function AllArticlesPage() {
  const posts = await client.fetch(query)

  return (
    <main className="bg-white text-gray-900 min-h-screen">
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-12">
          <p className="text-green-700 font-semibold mb-4 tracking-wide">
            ALL ARTICLES
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-[#0F172A]">
            Browse all
            <br />
            maternal health resources
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl leading-8">
            Discover trusted articles and practical guidance for pregnancy,
            childbirth, newborn care, emergencies, women’s health, and savings.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((post: any) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="flex gap-4 border border-gray-100 rounded-2xl p-4 hover:shadow-md transition bg-white"
            >
              <div className="relative w-36 h-32 rounded-2xl overflow-hidden shrink-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <span className="text-green-700 font-medium">
                    {post.category}
                  </span>

                  <span>•</span>

                  <span>{post.readTime || "5 min read"}</span>
                </div>

                <h2 className="text-lg font-semibold mb-3 leading-snug text-[#0F172A]">
                  {post.title}
                </h2>

                <p className="text-sm text-gray-600 leading-7">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
import Image from "next/image"
import Link from "next/link"

import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"

export const revalidate = 60

const query = groq`
*[_type == "post" && featured == true]
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
  title: "Featured Articles | Mama’s Call",
  description:
    "Explore featured pregnancy, childbirth, newborn care and maternal health articles from Mama’s Call.",
}

export default async function FeaturedArticlesPage() {
  const posts = await client.fetch(query)

  return (
    <main className="bg-white text-gray-900 min-h-screen">
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-12">
          <p className="text-green-700 font-semibold mb-4 tracking-wide">
            FEATURED ARTICLES
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-[#0F172A]">
            Featured stories
            <br />
            and expert guides
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl leading-8">
            Explore curated articles covering pregnancy, childbirth,
            newborn care, emergency signs, and financial support for mothers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: any) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group border border-gray-100 rounded-3xl overflow-hidden hover:shadow-xl transition bg-white"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <span className="text-green-700 font-medium">
                    {post.category}
                  </span>

                  <span>•</span>

                  <span>{post.readTime || "5 min read"}</span>
                </div>

                <h2 className="text-xl font-semibold leading-snug mb-3 text-[#0F172A]">
                  {post.title}
                </h2>

                <p className="text-gray-600 leading-7 text-sm">
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
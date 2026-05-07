import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"

export async function generateMetadata({ params }: any) {
  const { slug } = await params

  const category = await client.fetch(
    groq`
      *[_type == "category" && slug.current == $slug][0]{
        title,
        description
      }
    `,
    { slug }
  )

  if (!category) {
    return {
      title: "Category Not Found | Mama’s Call",
    }
  }

  return {
    title: `${category.title} Articles | Mama’s Call`,

    description:
      category.description ||
      `Explore ${category.title.toLowerCase()} articles on Mama’s Call.`,

    openGraph: {
      title: `${category.title} | Mama’s Call`,
      description:
        category.description ||
        `Explore ${category.title.toLowerCase()} articles.`,
    },

    twitter: {
      card: "summary_large_image",
      title: `${category.title} | Mama’s Call`,
      description:
        category.description ||
        `Explore ${category.title.toLowerCase()} articles.`,
    },
  }
}

export default async function CategoryPage({ params }: any) {
  const { slug } = await params

  if (!slug) return notFound()

  const data = await client.fetch(
    groq`
      {
        "category": *[_type == "category" && slug.current == $slug][0]{
          title
        },

        "posts": *[
          _type == "post" &&
          category->slug.current == $slug
        ] | order(publishedAt desc){

          title,
          excerpt,
          "slug": slug.current,
          "image": coalesce(mainImage.asset->url, "/placeholder.jpg"),
          "category": coalesce(category->title, "General")
        }
      }
    `,
    { slug }
  )

  if (!data?.category) return notFound()

return (
  <main className="bg-[#FAFAF7] min-h-screen">

    {/* HERO */}
    <section className="relative overflow-hidden border-b border-[#ECEDE7]">

      <div className="absolute inset-0 bg-gradient-to-b from-[#F3F5EE] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 pt-10 md:pt-14 pb-12">

        <Link
          href="/blog"
          className="inline-flex items-center text-sm text-gray-500 hover:text-green-700 transition mb-8"
        >
          ← Back to Blog
        </Link>

        <div className="max-w-4xl">

          <div className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-green-700 shadow-sm mb-6">
            Maternal Health Resources
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-[-0.04em] leading-[0.95] text-[#0F172A] mb-6">
            {data.category.title}
          </h1>

          <p className="text-lg md:text-xl leading-8 text-[#475569] max-w-3xl">
            Trusted pregnancy education, childbirth guidance,
            emergency awareness, and maternal health support
            for mothers and families.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-8">

            <div className="bg-white rounded-2xl px-4 py-2.5 shadow-sm text-sm text-[#0F172A]">
              <span className="font-semibold">
                {data.posts.length}
              </span>{" "}
              Articles
            </div>

            <div className="bg-white rounded-2xl px-4 py-2.5 shadow-sm text-sm text-[#0F172A]">
              Updated regularly
            </div>

          </div>

        </div>

      </div>

    </section>

    {/* ARTICLES */}
    <section className="max-w-7xl mx-auto px-4 py-10">

      {data.posts.length > 0 ? (

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7">

          {data.posts.map((post: any) => (

            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group"
            >

              <article className="h-full bg-white rounded-[28px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">

                {/* IMAGE */}
                <div className="relative h-56 overflow-hidden">

                  <Image
                    src={post.image || "/placeholder.jpg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />

                </div>

                {/* CONTENT */}
                <div className="p-6">

                  <div className="flex items-center justify-between mb-4">

                    <span className="text-xs font-semibold text-green-700 bg-green-50 px-3 py-1.5 rounded-full">
                      {post.category}
                    </span>

                    <span className="text-xs text-gray-400">
                      Article
                    </span>

                  </div>

                  <h2 className="text-2xl font-bold leading-[1.2] text-[#0F172A] mb-4 group-hover:text-green-700 transition">
                    {post.title}
                  </h2>

                  <p className="text-[#475569] leading-7 text-[15px] line-clamp-4">
                    {post.excerpt}
                  </p>

                  <div className="mt-6 inline-flex items-center text-green-700 font-semibold text-sm">
                    Read article →
                  </div>

                </div>

              </article>

            </Link>

          ))}

        </div>

      ) : (

        <div className="text-center py-24">

          <h3 className="text-3xl font-bold text-[#0F172A] mb-4">
            No articles yet
          </h3>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-8">
            We’re currently preparing trusted resources and maternal
            health guidance for this category.
          </p>

          <Link
            href="/blog"
            className="inline-flex items-center bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-2xl transition"
          >
            Browse All Articles
          </Link>

        </div>

      )}

    </section>

  </main>
)
}
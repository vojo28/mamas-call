//[slug] PAGE
import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { PortableText } from "@portabletext/react"

import { PortableTextComponents } from "@/components/blog/PortableTextComponents"
import TableOfContents from "@/components/blog/TableOfContents"

export const revalidate = 60

const query = groq`
{
  "post": *[_type == "post" && slug.current == $slug][0]{
    title,
    excerpt,
    body,
    publishedAt,

    "author": author->name,

    "image": coalesce(mainImage.asset->url, "/placeholder.jpg"),

"category": coalesce(category->title, "General")
  },

  "related": *[
    _type == "post" &&
    slug.current != $slug
  ][0...3]{
    title,
    excerpt,
    "slug": slug.current,
    "image": coalesce(mainImage.asset->url, "/placeholder.jpg")
  }
}
`

export async function generateMetadata({ params }: any) {

  const { slug } = await params

  const post = await client.fetch(
    groq`
      *[_type == "post" && slug.current == $slug][0]{
        title,
        excerpt,
        "image": coalesce(mainImage.asset->url, "/blog-hero.jpg")
      }
    `,
    { slug }
  )

  if (!post) {
    return {
      title: "Article Not Found | Mama’s Call",
    }
  }

  return {
    title: `${post.title} | Mama’s Call Blog`,

    description: post.excerpt,

    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },

    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

export default async function PostPage({ params }: any) {

  const { slug } = await params

  if (!slug) return notFound()

  const data = await client.fetch(query, { slug })

  if (!data?.post) return notFound()

  const post = data.post

  // READ TIME
  const words =
    post.body
      ?.map((block: any) =>
        block.children
          ?.map((child: any) => child.text)
          .join(" ")
      )
      .join(" ")
      .split(" ").length || 0

  const readTime = Math.ceil(words / 200)

  // TABLE OF CONTENTS
  const headings =
    post.body
      ?.filter(
        (block: any) =>
          block.style === "h2" ||
          block.style === "h3"
      )
      .map((block: any) => {

        const text =
          block.children
            ?.map((child: any) => child.text)
            .join("") || ""

        return {
          text,
          level: block.style,
          slug: text
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]+/g, ""),
        }
      }) || []

  // FAQ STRUCTURED DATA
  const faqs =
    post.body
      ?.filter((block: any) => block._type === "faq")
      .map((faq: any) => ({
        "@type": "Question",

        name: faq.question,

        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })) || []

  // JSON-LD SEO
  const jsonLd = {
    "@context": "https://schema.org",

    "@type": "MedicalWebPage",

    headline: post.title,

    description: post.excerpt,

    image: post.image,

    datePublished: post.publishedAt,

    author: {
      "@type": "Person",
      name: post.author || "Mama’s Call Team",
    },

    publisher: {
      "@type": "Organization",

      name: "Mama’s Call",

      logo: {
        "@type": "ImageObject",
        url: "http://localhost:3000/logo.png",
      },
    },

    about: {
      "@type": "MedicalCondition",
      name: post.category,
    },

    mainEntity: faqs,
  }

  return (
    <main className="bg-white text-gray-900">

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-4 pt-12 pb-8">

        <div className="mb-6">

          <span className="inline-block bg-green-100 text-green-700 text-sm px-4 py-2 rounded-full mb-4">
            {post.category}
          </span>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            {post.title}
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl">
            {post.excerpt}
          </p>

        </div>

        <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">

          <p>
            {post.author || "Mama’s Call Team"}
          </p>

          <span>•</span>

          <p>
            {new Date(post.publishedAt).toLocaleDateString()}
          </p>

          <span>•</span>

          <p>
            {readTime} min read
          </p>

        </div>

        <div className="relative w-full h-[420px] rounded-3xl overflow-hidden">

          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />

        </div>

      </section>

      {/* ARTICLE */}
      <section className="max-w-3xl mx-auto px-4 py-12">

        <TableOfContents headings={headings} />

        <article className="prose prose-lg max-w-none prose-headings:font-bold prose-p:text-gray-700 prose-li:text-gray-700">

          <PortableText
            value={post.body}
            components={PortableTextComponents}
          />

        </article>

      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 py-10">

        <div className="bg-green-50 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">

          <div>

            <h3 className="text-2xl font-bold mb-2">
              Need personalized guidance?
            </h3>

            <p className="text-gray-600">
              Talk to a nurse or start preparing financially for childbirth today.
            </p>

          </div>

          <div className="flex gap-4">

            <Link
              href="/talk-to-a-nurse"
              className="bg-green-700 text-white px-6 py-3 rounded-xl"
            >
              Talk to a Nurse
            </Link>

            <Link
              href="/save"
              className="border px-6 py-3 rounded-xl"
            >
              Start Saving
            </Link>

          </div>

        </div>

      </section>

      {/* RELATED POSTS */}
      <section className="max-w-5xl mx-auto px-4 py-12">

        <h2 className="text-2xl font-bold mb-8">
          Related Articles
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {data.related.map((post: any) => (

            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="border rounded-2xl overflow-hidden hover:shadow-lg transition"
            >

              <div className="relative h-48">

                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />

              </div>

              <div className="p-4">

                <h3 className="font-semibold mb-2">
                  {post.title}
                </h3>

                <p className="text-sm text-gray-600">
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
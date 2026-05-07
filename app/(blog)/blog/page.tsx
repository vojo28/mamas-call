import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"

import BlogPageClient from "@/components/blog/BlogPageClient"

export const revalidate = 60

const query = groq`{
  "featured": *[_type == "post" && featured == true] | order(publishedAt desc)[0...4]{
    title,
    excerpt,
    "slug": slug.current,
    "image": coalesce(mainImage.asset->url, "/placeholder.jpg"),
    "category": coalesce(category->title, "General"),
    readTime
  },

  "latest": *[_type == "post"] | order(publishedAt desc)[0...6]{
    title,
    excerpt,
    "slug": slug.current,
    "image": coalesce(mainImage.asset->url, "/placeholder.jpg"),
    "category": coalesce(category->title, "General"),
    readTime
  },

  "allPosts": *[_type == "post"] | order(publishedAt desc){
    title,
    excerpt,
    "slug": slug.current,
    "image": coalesce(mainImage.asset->url, "/placeholder.jpg"),
    "category": coalesce(category->title, "General"),
    readTime
  },

"categories": *[_type == "category"] | order(order asc){  
  title,
    icon,
    "slug": slug.current
  }
}`

export const metadata = {
  metadataBase: new URL("https://mamascall.com"),

  title:
    "Mama’s Call Blog | Pregnancy, Childbirth & Maternal Health Resources",

  description:
    "Trusted pregnancy, childbirth, newborn care, emergency signs, and maternal health resources for mothers and families.",

  openGraph: {
    title: "Mama’s Call Blog",
    description:
      "Trusted pregnancy and maternal health resources for mothers and families.",
    images: ["/blog-hero.webp"],
  },

  twitter: {
    card: "summary_large_image",
    title: "Mama’s Call Blog",
    description:
      "Trusted pregnancy and maternal health resources for mothers and families.",
    images: ["/blog-hero.webp"],
  },
}

export default async function BlogPage() {

  const data = await client.fetch(query)

  return (
    <BlogPageClient
      posts={data.allPosts}
      featured={data.featured}
      latest={data.latest}
      categories={data.categories}
    />
  )
}
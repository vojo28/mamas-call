"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"

import BlogSearch from "./BlogSearch"

export default function BlogPageClient({
  posts,
  featured,
  latest,
  categories,
}: any) {

  const [query, setQuery] = useState("")

  const isSearching = query.trim().length > 0

  const filteredPosts = useMemo(() => {

    const normalizedQuery = query.toLowerCase().trim()

    return posts.filter((post: any) => {

      const searchText = `
        ${post.title}
        ${post.excerpt}
        ${post.category}
      `.toLowerCase()

      return searchText.includes(normalizedQuery)

    })

  }, [query, posts])

  return (

    <main className="bg-white text-gray-900 overflow-x-hidden">

      {/* HERO */}
<section className="bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 pt-6 md:pt-0 pb-16">

          <div className="grid md:grid-cols-2 gap-8 items-center">

            {/* LEFT CONTENT */}
            <div className="max-w-2xl">

              <p className="text-green-700 font-semibold mb-4 tracking-wide">
                BLOG & RESOURCES
              </p>

              <h1 className="text-[44px] md:text-[64px] leading-[1.02] font-bold text-[#0F172A] mb-6">

                Trusted information

                <br />

                for mothers and

                <br />

                families

              </h1>

              <p className="text-lg md:text-[22px] leading-8 md:leading-10 text-gray-600 max-w-xl mb-8">

                Practical pregnancy tips, expert guidance,
                real stories, and financial support to help
                you make confident decisions.

              </p>

            </div>

            {/* HERO IMAGE */}
            <div className="relative h-[420px] md:h-[640px] w-full overflow-hidden">

              <Image
                src="/blog-hero.webp"
                alt="Mama"
                fill
                priority
                className="object-cover object-[72%_bottom]"
              />

            </div>

          </div>

          {/* SEARCH */}
<div className="mt-4 md:-mt-20 max-w-lg">
  <BlogSearch
    query={query}
    setQuery={setQuery}
  />

</div>

        </div>

      </section>

      {/* SEARCH RESULTS */}
      {isSearching ? (

        <section className="max-w-7xl mx-auto px-4 py-14">

          <div className="flex items-center justify-between mb-6">

            <div>

              <h2 className="text-2xl font-bold">
                Search Results
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Showing results for "{query}"
              </p>

            </div>

            <p className="text-sm text-gray-500">
              {filteredPosts.length} article(s)
            </p>

          </div>

          {filteredPosts.length > 0 ? (

            <div className="grid md:grid-cols-2 gap-6">

              {filteredPosts.map((post: any) => (

                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="flex gap-4 border rounded-2xl p-4 hover:shadow-md transition bg-white"
                >

                  <div className="relative w-32 h-28 rounded-xl overflow-hidden shrink-0">

                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />

                  </div>

                  <div>

                    <p className="text-xs text-green-700 mb-1">
                      {post.category}
                    </p>

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

          ) : (

            <div className="text-center py-16">

              <p className="text-2xl font-semibold mb-2">
                No articles found
              </p>

              <p className="text-gray-600">
                Try another keyword like “pregnancy”, “bleeding”, or “delivery”.
              </p>

            </div>

          )}

        </section>

      ) : (

        <>

          {/* CATEGORY SECTION */}
          <section className="max-w-7xl mx-auto px-4 py-14">

            <h2 className="text-2xl font-bold mb-6">
              Browse by category
            </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full">
              {categories.map((cat: any) => (

                <Link
                  href={`/blog/category/${cat.slug}`}
                  key={cat.title + cat.icon}
className="flex flex-col items-center justify-center text-center min-h-[140px] w-full border border-gray-200 rounded-2xl hover:shadow-md transition bg-white"                >

                  <div className="text-3xl mb-3">
                    {cat.icon || "📁"}
                  </div>

                  <p className="text-sm font-medium">
                    {cat.title}
                  </p>

                </Link>

              ))}

            </div>

          </section>

         {/* FEATURED */}
<section className="max-w-7xl mx-auto px-4 py-10">

  <div className="flex items-center justify-between mb-8">

    <h2 className="text-2xl font-bold">
      Featured articles
    </h2>

    <Link
      href="/blog/featured"
      className="hidden md:flex items-center gap-2 text-green-700 font-semibold hover:opacity-80 transition"
    >
      View all featured
      <span>→</span>
    </Link>

  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

    {featured.map((post: any) => (

      <Link
        key={post.slug}
        href={`/blog/${post.slug}`}
        className="group border border-gray-200 rounded-3xl overflow-hidden bg-white hover:shadow-lg transition"
      >

        {/* IMAGE */}
        <div className="relative h-56 overflow-hidden">

          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition duration-500"
          />

        </div>

        {/* CONTENT */}
        <div className="p-5">

          {/* CATEGORY + READ TIME */}
          <div className="flex items-center gap-2 mb-4">

            <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
              {post.category}
            </span>

                    <span className="text-sm text-gray-400">
        • {post.readTime || "5 min read"}
        </span>

          </div>

          {/* TITLE */}
          <h3 className="text-2xl font-bold leading-tight mb-4 text-[#111827] group-hover:text-green-700 transition">

            {post.title}

          </h3>

          {/* EXCERPT */}
          <p className="text-gray-600 leading-8 text-[17px]">

            {post.excerpt}

          </p>

        </div>

      </Link>

    ))}

  </div>

  {/* MOBILE BUTTON */}
  <div className="mt-8 md:hidden">

    <Link
      href="/blog/featured"
      className="inline-flex items-center gap-2 text-green-700 font-semibold"
    >
      View all featured
      <span>→</span>
    </Link>

  </div>

</section>

          {/* LATEST */}
          <section className="max-w-7xl mx-auto px-4 py-14">

            <div className="flex items-center justify-between mb-6">
  <h2 className="text-2xl font-bold">
    Latest articles
  </h2>

  <Link
    href="/blog/all"
    className="text-sm font-medium text-green-700 hover:text-green-800 transition"
  >
    View all articles
  </Link>
</div>

            <div className="grid md:grid-cols-2 gap-6">

              {latest.map((post: any) => (

                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="flex gap-4 border border-gray-100 rounded-2xl p-4 hover:shadow-md transition bg-white"
                >

                  <div className="relative w-32 h-28 rounded-xl overflow-hidden shrink-0">

                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />

                  </div>

                  <div>

                    <p className="text-xs text-green-700 mb-1">
                      {post.category}
                    </p>

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

        </>

      )}

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 py-14">

        <div className="bg-green-50 rounded-3xl p-8 flex flex-col md:flex-row justify-between items-center gap-6">

          <div>

            <h3 className="text-2xl font-bold mb-2">
              Need personalized guidance?
            </h3>

            <p className="text-gray-600">
              Talk to a nurse or start your baby budget plan today.
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
              Create Baby Budget
            </Link>

          </div>

        </div>

      </section>

    </main>

  )
}
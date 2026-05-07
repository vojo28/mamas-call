"use client"

export default function TableOfContents({ headings }: any) {

  if (!headings.length) return null

  return (

    <aside className="bg-gray-50 border rounded-2xl p-6 mb-10">

      <h3 className="font-bold text-lg mb-4">
        Table of Contents
      </h3>

      <ul className="space-y-3">

        {headings.map((heading: any) => (

          <li
            key={heading.slug}
            className={
              heading.level === "h3"
                ? "ml-4 text-sm"
                : ""
            }
          >

            <a
              href={`#${heading.slug}`}
              className="text-gray-700 hover:text-green-700 transition"
            >
              {heading.text}
            </a>

          </li>

        ))}

      </ul>

    </aside>

  )
}
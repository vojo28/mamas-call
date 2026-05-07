//components/blog/BlogSearch.tsx

"use client"

export default function BlogSearch({
  query,
  setQuery,
}: any) {

  const suggestions = [
    "Signs of labor",
    "Childbirth cost",
    "HMO pregnancy",
  ]

  return (

    <div>

      {/* SEARCH INPUT */}
      <div className="relative mb-5">

        <input
          type="text"
          placeholder="Search articles, topics or keywords..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
className="w-full h-16 border border-black/50 rounded-2xl px-6 text-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-black pr-28 shadow-sm"        />

        {query && (

          <button
            onClick={() => setQuery("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-sm px-4 py-2 bg-gray-100 rounded-xl hover:bg-gray-200 transition"
          >
            Clear
          </button>

        )}

      </div>

      {/* POPULAR SEARCHES */}
      {!query && (

        <div className="flex items-center gap-3 whitespace-nowrap">

          <span className="text-sm text-gray-500 font-medium shrink-0">
            Popular searches:
          </span>

          {suggestions.map((tag) => (

            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm transition shrink-0"
            >
              {tag}
            </button>

          ))}

        </div>

      )}

    </div>

  )

}
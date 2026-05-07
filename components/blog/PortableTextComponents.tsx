import Image from "next/image"
import { urlFor } from "@/sanity/lib/image"

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
}

export const PortableTextComponents = {

  types: {

    image: ({ value }: any) => {

      return (

        <div className="my-10">

          <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">

            <Image
              src={urlFor(value).url()}
              alt={value.alt || "Article image"}
              fill
              className="object-cover"
            />

          </div>

          {value.alt && (
            <p className="text-sm text-gray-500 mt-3 text-center">
              {value.alt}
            </p>
          )}

        </div>

      )
    },

    callout: ({ value }: any) => {

  const styles = {
    info: "bg-blue-50 border-blue-200 text-blue-900",
    warning: "bg-red-50 border-red-200 text-red-900",
    success: "bg-green-50 border-green-200 text-green-900",
  }

  const icons = {
    info: "💡",
    warning: "⚠️",
    success: "✅",
  }

  return (

    <div
      className={`border rounded-2xl p-6 my-8 ${
        styles[value.type as keyof typeof styles]
      }`}
    >

      <div className="flex items-start gap-4">

        <div className="text-2xl">
          {icons[value.type as keyof typeof icons]}
        </div>

        <div>

          <h4 className="font-bold mb-2">
            {value.title}
          </h4>

          <p className="leading-7">
            {value.message}
          </p>

        </div>

      </div>

    </div>

  )
},
faq: ({ value }: any) => {

  return (

    <details className="border rounded-2xl p-5 my-6 group">

      <summary className="font-semibold cursor-pointer list-none flex items-center justify-between">

        <span>
          {value.question}
        </span>

        <span className="text-xl group-open:rotate-45 transition">
          +
        </span>

      </summary>

      <div className="mt-4 text-gray-700 leading-7">
        {value.answer}
      </div>

    </details>

  )
},
  },

  block: {

    h1: ({ children }: any) => (
      <h1 className="text-4xl font-bold mt-12 mb-6">
        {children}
      </h1>
    ),

    h2: ({ children }: any) => {

      const text = children?.toString() || ""
      const id = slugify(text)

      return (
        <h2
          id={id}
          className="text-3xl font-bold mt-10 mb-5 scroll-mt-24"
        >
          {children}
        </h2>
      )
    },

    h3: ({ children }: any) => {

      const text = children?.toString() || ""
      const id = slugify(text)

      return (
        <h3
          id={id}
          className="text-2xl font-semibold mt-8 mb-4 scroll-mt-24"
        >
          {children}
        </h3>
      )
    },

    normal: ({ children }: any) => (
      <p className="text-lg leading-8 text-gray-700 mb-6">
        {children}
      </p>
    ),

    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-green-600 pl-6 italic my-8 text-gray-700">
        {children}
      </blockquote>
    ),
  },

  list: {

    bullet: ({ children }: any) => (
      <ul className="list-disc pl-6 mb-6 space-y-3">
        {children}
      </ul>
    ),

    number: ({ children }: any) => (
      <ol className="list-decimal pl-6 mb-6 space-y-3">
        {children}
      </ol>
    ),
  },

  marks: {

    strong: ({ children }: any) => (
      <strong className="font-bold text-gray-900">
        {children}
      </strong>
    ),

    em: ({ children }: any) => (
      <em className="italic">
        {children}
      </em>
    ),

    link: ({ value, children }: any) => (

      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-700 underline hover:text-green-800"
      >
        {children}
      </a>

    ),
  },
}
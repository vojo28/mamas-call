import { DocumentTextIcon } from "@sanity/icons"
import {
  defineArrayMember,
  defineField,
  defineType,
} from "sanity"

export const postType = defineType({
  name: "post",
  title: "Post",
  type: "document",
  icon: DocumentTextIcon,

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),

    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    }),

    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          title: "Alternative text",
          type: "string",
        }),
      ],
    }),

   defineField({
        name: "category",
        title: "Category",
        type: "reference",
        to: [{ type: "category" }],
      }),

    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 4,
    }),

    defineField({
      name: "featured",
      title: "Featured Post",
      type: "boolean",
      initialValue: false,
    }),

    defineField({
      name: "readTime",
      title: "Read Time",
      type: "string",
      description: "Example: 5 min read",
    }),

    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
    }),

    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
    }),
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
      featured: "featured",
    },

    prepare(selection) {
      const { author, featured } = selection

      return {
        ...selection,
        subtitle: `${
          author ? `by ${author}` : "No author"
        }${featured ? " • Featured" : ""}`,
      }
    },
  },
})
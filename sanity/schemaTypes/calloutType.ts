import { defineField, defineType } from "sanity"

export const calloutType = defineType({
  name: "callout",
  title: "Callout",
  type: "object",

  fields: [

    defineField({
      name: "type",
      title: "Type",
      type: "string",

      options: {
        list: [
          { title: "Info", value: "info" },
          { title: "Warning", value: "warning" },
          { title: "Success", value: "success" },
        ],
      },
    }),

    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),

    defineField({
      name: "message",
      title: "Message",
      type: "text",
    }),
  ],
})
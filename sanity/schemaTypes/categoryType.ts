// This is a Sanity schema definition for a "category" document type. It includes fields for title, slug, description, and an icon (which can be an emoji). The schema is defined using the `defineType` function from Sanity, and it uses the `TagIcon` from the Sanity icons library for visual representation in the Sanity Studio.
import {TagIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const categoryType = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: TagIcon,

  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),

    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),

    defineField({
      name: 'description',
      type: 'text',
    }),

      defineField({
          name: "order",
          title: "Order",
          type: "number",
        }),
        
    // ✅ ADD THIS (don’t remove anything above)
    defineField({
      name: 'icon',
      type: 'string',
      description: 'Use emoji for now (🤰, 👶, ⚠️, etc.)',
    }),

       
  ],
})
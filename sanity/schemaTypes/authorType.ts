import {UserIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const authorType = defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  icon: UserIcon,
  fields: [

  defineField({
    name: 'name',
    title: 'Name',
    type: 'string',
  }),

  defineField({
    name: 'slug',
    title: 'Slug',
    type: 'slug',
    options: {
      source: 'name',
    },
  }),

  defineField({
    name: 'role',
    title: 'Role',
    type: 'string',
    description: 'Example: Maternal Health Nurse',
  }),

  defineField({
    name: 'image',
    title: 'Profile Image',
    type: 'image',
    options: {
      hotspot: true,
    },
  }),

  defineField({
    name: 'bio',
    title: 'Bio',
    type: 'array',
    of: [
      defineArrayMember({
        type: 'block',
        styles: [{ title: 'Normal', value: 'normal' }],
        lists: [],
      }),
    ],
  }),

  defineField({
    name: 'isMedicalReviewer',
    title: 'Medical Reviewer',
    type: 'boolean',
    initialValue: false,
  }),

],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})

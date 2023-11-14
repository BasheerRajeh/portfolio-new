import { Layout } from 'lucide-react'
import { defineField, defineType } from 'sanity'

const project = defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    icon: Layout,
    fields: [
        defineField({
            name: 'coverImage',
            title: 'Cover Image',
            type: 'image',
            description: 'Upload a cover project picture',
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string',
                },
            ],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 200,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'shortDescription',
            title: 'Short Description',
            type: 'text',
            rows: 2,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{ type: 'block' }],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'demoUrl',
            title: 'Demo URL',
            type: 'url',
        }),
        defineField({
            name: 'sourceUrl',
            title: 'Source URL',
            type: 'url',
        }),
        defineField({
            name: 'technologies',
            title: 'Technologies',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'date',
            title: 'Date',
            type: 'date',
            options: {
                dateFormat: 'YYYY-MM-DD',
            },
        }),
    ],
    preview: {
        select: {
            title: 'title',
            description: 'shortDescription',
            media: 'coverImage',
        },
    },
})

export default project

import { Newspaper } from 'lucide-react'
import { defineField, defineType } from 'sanity'

const post = defineType({
    name: 'post',
    title: 'Post',
    type: 'document',
    icon: Newspaper,
    fields: [
        defineField({
            name: 'coverImage',
            title: 'Cover Image',
            type: 'image',
            description: 'Upload a cover post picture',
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
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'content',
            title: 'Content',
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
    ],
    preview: {
        select: {
            title: 'title',
            user: 'user.fullName',
            media: 'coverImage',
        },
        prepare(selection) {
            const { user, media, title } = selection
            return {
                title,
                subtitle: user && `by ${user}`,
                media,
            }
        },
    },
})

export default post

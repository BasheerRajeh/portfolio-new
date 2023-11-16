import { Box, UserIcon } from 'lucide-react'
import { defineArrayMember, defineField, defineType } from 'sanity'

const profile = defineType({
    name: 'profile',
    title: 'Profile',
    icon: UserIcon,
    type: 'document',
    fields: [
        defineField({
            name: 'fullName',
            title: 'Full Name',
            type: 'string',
            description: 'Full name will be displayed in hero section',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'username',
            title: 'Username',
            type: 'slug',
            description: 'This username will be uses as user identifier',
            options: { maxLength: 50, source: 'fullName' },
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
            description: 'This email will be uses for connection',
            validation: (Rule) => Rule.required().email(),
        }),
        defineField({
            name: 'headline',
            title: 'Headline',
            type: 'string',
            description: 'In one short sentence, what do you do?',
            validation: (Rule) => Rule.required().min(20).max(50),
        }),
        defineField({
            name: 'profileImage',
            title: 'Profile Image',
            type: 'image',
            description: 'Upload a profile picture',
            options: { hotspot: true },
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
            name: 'shortBio',
            title: 'Short Bio',
            type: 'text',
            rows: 4,
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
        }),
        defineField({
            name: 'fullBio',
            title: 'Full Bio',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'resumeURL',
            title: 'Upload Resume',
            type: 'file',
        }),
        defineField({
            name: 'socialLinks',
            title: 'Social Links',
            type: 'object',
            description: 'Add your social media links:',
            fields: [
                {
                    name: 'github',
                    title: 'Github URL',
                    type: 'url',
                    initialValue: 'https://github.com/',
                },
                {
                    name: 'linkedin',
                    title: 'Linkedin URL',
                    type: 'url',
                    initialValue: 'https://linkedin.com/in/',
                },
                {
                    name: 'twitter',
                    title: 'Twitter URL',
                    type: 'url',
                    initialValue: 'https://twitter.com/',
                },
                {
                    name: 'telegram',
                    title: 'Telegram URL',
                    type: 'url',
                    initialValue: 'https://t.me/',
                },
            ],
            options: {
                collapsed: false,
                collapsible: true,
                columns: 2,
            },
        }),
        defineField({
            name: 'skills',
            type: 'array',
            title: 'Skills',
            of: [
                defineArrayMember({
                    name: 'skill',
                    type: 'object',
                    title: 'Skill',
                    icon: Box,
                    fields: [
                        { type: 'string', name: 'label', title: 'Skill Name' },
                        {
                            type: 'number',
                            name: 'value',
                            title: 'Skill Level',
                            validation: (rule) =>
                                rule.min(0).max(10).required(),
                        },
                    ],
                    options: {
                        collapsible: true,
                        collapsed: true,
                        columns: 2,
                    },
                }),
            ],
        }),
    ],
    preview: {
        select: {
            title: 'fullName',
            subtitle: 'email',
            media: 'profileImage',
        },
    },
})

export default profile

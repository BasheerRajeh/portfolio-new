import { Briefcase } from 'lucide-react'
import { defineField, defineType } from 'sanity'

const experience = defineType({
    name: 'experience',
    title: 'Experience',
    type: 'document',
    icon: Briefcase,
    fields: [
        defineField({
            name: 'logo',
            title: 'Company Logo',
            type: 'image',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'name',
            title: 'Company Name',
            type: 'string',
            description: 'What is the name of the company?',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'jobTitle',
            title: 'Job Title',
            type: 'string',
            description: 'Enter the job title. E.g: Software Developer',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'url',
            title: 'Company Website',
            type: 'url',
        }),
        defineField({
            name: 'description',
            title: 'Job Description',
            type: 'text',
            rows: 3,
            description: 'Write a brief description about this role',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'startDate',
            title: 'Start Date',
            type: 'date',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'endDate',
            title: 'End Date',
            type: 'date',
        }),
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'jobTitle',
            media: 'logo',
        },
    },
})

export default experience

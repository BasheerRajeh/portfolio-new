import { Layout, Pencil } from 'lucide-react'

/**
 * The basic type of a link.
 */
export type Link = {
    /**
     * The URL of the link.
     */
    href: string
    /**
     * The title of the link.
     */
    title: string
}

/**
 * The links displayed in the header.
 */
type HeaderLinks = Array<{
    /**
     * The icon of the link.
     */
    icon: React.ReactNode
    /**
     * The URL of the link.
     */
    href: string
    /**
     * The text of the link.
     */
    text: string
}>

export const HEADER_LINKS: HeaderLinks = [
    {
        icon: <Layout size={14} />,
        href: '/projects',
        text: 'Projects',
    },
    {
        icon: <Pencil size={14} />,
        href: '/blog',
        text: 'Blog',
    },
]

export type SocialLink = {
    id: string
    label: string
    icon: React.ReactNode
    href: string
}

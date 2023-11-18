// eslint-disable-next-line import/named
import { PortableTextBlock } from 'sanity'

export type ProfileType = {
    _id: string
    fullName: string
    username: string
    headline: string
    profileImage: {
        alt: string
        image: string
    }
    shortBio: string
    email: string
    fullBio: PortableTextBlock[]
    location: string
    resumeURL: string
    socialLinks: Record<string, string>
    skills: string[]
}

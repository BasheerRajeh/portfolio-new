import { groq } from 'next-sanity'

import client from './sanity.client'

export async function getProfile() {
    return client.fetch(
        groq`*[_type == "profile"]{
            _id,
            fullName,
            username,
            email,
            headline,
            profileImage {alt, "image": asset-> url},
            shortBio,
            location,
            fullBio,
            "resumeURL": resumeURL.asset->url,
            socialLinks,
            skills
        }`,
    )
}

export async function getExperiance() {
    return client.fetch(
        groq`*[_type == "experience"] | order(_createdAt desc){
            _id,
            name,
            jobTitle,
            "logo": logo.asset->url,
            url,
            description,
            startDate,
            endDate,
        }`,
    )
}

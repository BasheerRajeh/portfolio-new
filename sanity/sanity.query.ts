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

import Hero from '@/components/hero'
import { getProfile } from '@/sanity/sanity.query'
import { ProfileType } from '@/types'

/**
 * Home Page
 */
export default async function Home() {
    const [profile]: ProfileType[] = await getProfile()
    return (
        <>
            <Hero
                fullName={profile.fullName}
                headline={profile.headline}
                shortBio={profile.shortBio}
                profileImage={profile.profileImage}
                socialLinks={profile.socialLinks}
            />
        </>
    )
}

import Experiance from '@/components/experience'
import Hero from '@/components/hero'
import { getExperiance, getProfile } from '@/sanity/sanity.query'
import { ExperienceType, ProfileType } from '@/types'

/**
 * Home Page
 */
export default async function Home() {
    const [profile]: ProfileType[] = await getProfile()
    const experiance: ExperienceType[] = await getExperiance()

    return (
        <>
            <Hero profile={profile} />
            <Experiance jobs={experiance} />
        </>
    )
}

import { getProfile } from '@/sanity/sanity.query'
import { ProfileType } from '@/types'

/**
 * Home Page
 */
export default async function Home() {
    const [profile]: ProfileType[] = await getProfile()
    return (
        <div>
            <h1>Hello empty project</h1>
            {profile && <h1 key={profile._id}>{profile.email}</h1>}
        </div>
    )
}

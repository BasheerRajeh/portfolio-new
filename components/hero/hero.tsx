/* eslint-disable security/detect-object-injection */

import Icons from '../common/icon'
import Image from '../common/image'
import SociaIcon from '../common/social-icon'

type HeroProps = {
    fullName: string
    headline: string
    profileImage: { alt: string; image: string }
    shortBio: string
    socialLinks: Record<string, string>
}

const Hero: React.FC<HeroProps> = ({
    fullName,
    headline,
    profileImage,
    shortBio,
    socialLinks,
}) => {
    return (
        <section className='my-16 space-y-6'>
            <div className='flex justify-between'>
                <div className='flex flex-col justify-center  p-4'>
                    <div className='flex items-center gap-6'>
                        <div className='relative h-24 w-24 md:hidden  md:h-28 md:w-28'>
                            <Image
                                src={profileImage.image}
                                className='rounded-full'
                                width={148}
                                height={148}
                                alt={profileImage.alt}
                                loading='eager'
                                priority
                            />
                            <div className='absolute inset-0 -z-10 bg-gradient-to-tl from-purple-700 to-orange-700 opacity-50 blur-2xl md:opacity-0' />
                        </div>
                        <div className='space-y-2'>
                            <h1 className='text-2xl font-medium text-muted-foreground sm:text-3xl'>
                                {fullName}
                            </h1>
                            <h2 className='align-middle text-sm leading-6 text-muted-foreground/80 sm:text-lg'>
                                {headline}
                            </h2>
                        </div>
                    </div>
                    <p className='mt-7 text-xl text-muted-foreground sm:mt-9'>
                        {shortBio}
                    </p>
                    <div className='my-6 flex gap-8'>
                        {Object.keys(socialLinks).map((link: string) => (
                            <SociaIcon
                                key={link}
                                className='text-muted-foreground transition-all duration-500 ease-in-out hover:text-current'
                                socialLink={{
                                    id: link,
                                    href: socialLinks[link],
                                    icon:
                                        Icons[link]({}) || Icons['website']({}),
                                    label: link,
                                }}
                            />
                        ))}
                    </div>
                </div>
                <div className='hidden min-w-[300px] md:block'>
                    <div className='p-4'>
                        <Image
                            className='rounded-2xl'
                            src={profileImage.image}
                            alt={profileImage.alt}
                            width={400}
                            height={400}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero

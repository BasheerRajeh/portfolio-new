/* eslint-disable security/detect-object-injection */

import Icons from '@/components/common/icon'
import Image from '@/components/common/image'
import SociaIcon from '@/components/common/social-icon'
import { ProfileType } from '@/types'

type HeroProps = {
    profile: ProfileType
}

const Hero: React.FC<HeroProps> = ({ profile }) => {
    const { fullName, headline, profileImage, shortBio, socialLinks } = profile
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
                            <h1 className='text-2xl font-bold sm:text-3xl lg:text-4xl'>
                                {fullName}
                            </h1>
                            <h2 className='align-middle text-sm leading-6 text-muted-foreground sm:text-lg'>
                                {headline}
                            </h2>
                        </div>
                    </div>
                    <p className='mt-7 text-xl sm:mt-9'>{shortBio}</p>
                    <div className='group my-6  flex w-fit gap-8 hover:text-muted-foreground'>
                        {Object.keys(socialLinks).map((link: string) => (
                            <SociaIcon
                                key={link}
                                className='transition-all duration-500 ease-in-out hover:text-primary'
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

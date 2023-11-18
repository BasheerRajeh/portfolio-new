import Link from '@/components/common/link'
import { formatDate } from '@/lib/format-date'
import { ExperienceType } from '@/types'

import Image from '../common/image'

type ExperienceProps = {
    jobs: ExperienceType[]
}

const Experience: React.FC<ExperienceProps> = ({ jobs }) => {
    return (
        <section className='my-16 pb-10'>
            <div className='mb-8'>
                <h2 className='mb-4 text-xl font-medium tracking-tight sm:text-2xl md:text-4xl'>
                    Work Experience
                </h2>
            </div>
            <div className='grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-2'>
                {jobs.map((job) => (
                    <div
                        key={job._id}
                        className='relative flex items-start gap-x-4 lg:gap-x-6'
                    >
                        <div className='relative h-full before:absolute before:inset-y-0 before:left-1/2 before:h-full before:w-[1px] before:bg-muted-foreground'>
                            <Link
                                href={job.url}
                                className='relative grid aspect-square min-h-[70px] min-w-[70px] place-items-center text-clip rounded-sm border border-zinc-200 bg-background p-2 dark:border-zinc-800'
                            >
                                <Image
                                    src={job.logo}
                                    alt={`${job.name} logo`}
                                    imageClassName='object-cover duration-300'
                                    className='rounded'
                                    width={50}
                                    height={50}
                                />
                            </Link>
                        </div>
                        <div className='flex flex-col items-start'>
                            <h3 className='text-xl font-bold'>{job.name}</h3>
                            <p className='text-muted-foreground'>
                                {job.jobTitle}
                            </p>
                            <time className='mt-2 text-sm uppercase tracking-widest text-zinc-500'>
                                {formatDate(job.startDate)} -{' '}
                                {job.endDate ? (
                                    formatDate(job.endDate)
                                ) : (
                                    <span className='text-primary'>
                                        Present
                                    </span>
                                )}
                            </time>
                            <p className='my-4 tracking-tight text-zinc-600 dark:text-zinc-400'>
                                {job.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Experience

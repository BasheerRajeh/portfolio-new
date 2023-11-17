import Image from 'next/image'
import React from 'react'

import Svg from '@/components/common/svg'
import Header from '@/components/header'
import { ScrollArea } from '@/components/ui/scroll-area'

type SiteLayoutProps = {
    children: React.ReactNode
}

const SiteLayout: React.FC<SiteLayoutProps> = ({ children }) => {
    return (
        <div className='h-screen overflow-hidden'>
            <Svg.noise />
            <Image
                width={1512}
                height={550}
                className='absolute left-1/2 top-0 -z-10 -translate-x-1/2'
                src='/images/gradient-background-top.png'
                alt=''
                priority
            />
            <Header className='fixed inset-x-0 top-4 z-40 mx-auto h-[60px] max-w-5xl' />
            <ScrollArea>
                <main className='relative mx-auto h-screen max-w-5xl px-6 py-24 sm:px-8'>
                    {children}
                </main>
            </ScrollArea>
        </div>
    )
}

export default SiteLayout

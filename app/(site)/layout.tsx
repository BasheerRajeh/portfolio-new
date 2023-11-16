import React from 'react'

import Svg from '@/components/common/svg'
import Header from '@/components/header'

type SiteLayoutProps = {
    children: React.ReactNode
}

const SiteLayout: React.FC<SiteLayoutProps> = ({ children }) => {
    return (
        <div className='h-screen'>
            <Svg.noise />
            <Header className='fixed inset-x-0 top-4 z-40 mx-auto h-[60px] max-w-5xl' />
            <main className='relative mx-auto mb-16 max-w-5xl px-6 py-24 sm:px-8'>
                {children}
            </main>
        </div>
    )
}

export default SiteLayout

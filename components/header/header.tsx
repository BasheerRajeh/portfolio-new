'use client'

import { useEffect, useState } from 'react'

import Icons from '@/components/common/icon'
import Link from '@/components/common/link'
import { cn } from '@/lib/utils'

import ThemeSwitcher from './theme-switcher'

type HeaderProps = React.HTMLAttributes<HTMLHeadElement>
const Header: React.FC<HeaderProps> = ({ className, ...rest }) => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const changeBackground = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }
        document.addEventListener('scroll', changeBackground)
        return () => document.removeEventListener('scroll', changeBackground)
    }, [])

    return (
        <header
            className={cn(
                'flex items-center justify-between rounded-2xl bg-background/30 px-8 py-2 shadow-sm saturate-100 backdrop-blur-[10px] transition-colors duration-500',
                className,
                isScrolled && 'bg-background/80',
            )}
            {...rest}
        >
            <Link
                href='/'
                className='flex items-center justify-center gap-1'
                aria-label='Homepage'
            >
                <Icons.logo className='h-6 w-6' />
            </Link>
            <div className='flex items-center gap-2'>
                {/* <Navbar /> */}
                <ThemeSwitcher />
            </div>
        </header>
    )
}

export default Header

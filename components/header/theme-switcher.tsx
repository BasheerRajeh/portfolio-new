'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

import Icons from '../common/icon'

const ThemeSwitcher = () => {
    const { resolvedTheme: theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')
    useEffect(() => setMounted(true), [])

    return (
        <Button
            variant='ghost'
            className={cn(
                'flex h-9 w-9 items-center justify-center p-2',
                !mounted && 'animate-pulse bg-zinc-200/20 dark:bg-zinc-800/20',
            )}
            type='button'
            aria-label='Toggle theme'
            onClick={toggleTheme}
        >
            {mounted && theme === 'dark' && <Icons.moon />}
            {mounted && theme === 'light' && <Icons.sun />}
        </Button>
    )
}

export default ThemeSwitcher

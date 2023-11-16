'use client'

import { MoonStar, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const ThemeSwitcher = () => {
    const { resolvedTheme: theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')
    useEffect(() => setMounted(true), [])

    return (
        <Button
            variant='ghost'
            className={cn(
                'flex h-9 w-9 items-center justify-center p-0',
                !mounted && 'animate-pulse bg-zinc-200/20 dark:bg-zinc-800/20',
            )}
            type='button'
            aria-label='Toggle theme'
            onClick={toggleTheme}
        >
            {mounted && theme === 'dark' && <Sun size={20} />}
            {mounted && theme === 'light' && <MoonStar size={20} />}
        </Button>
    )
}

export default ThemeSwitcher

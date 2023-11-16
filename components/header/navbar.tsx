'use client'
import { usePathname } from 'next/navigation'

import Link from '@/components/common/link'
import { HEADER_LINKS } from '@/config/links'
import { cn } from '@/lib/utils'

const Navbar = () => {
    const pathname = usePathname()

    return (
        <ul className='hidden space-x-2 md:flex'>
            {HEADER_LINKS.map((link) => {
                return (
                    <li key={link.href}>
                        <Link
                            href={link.href}
                            className={cn(
                                'select-none rounded px-3 py-2 text-sm font-medium no-underline transition-colors duration-150',
                                {
                                    ['text-muted-foreground hover:text-foreground']:
                                        link.href !== pathname,
                                },
                                {
                                    ['text-foreground']: link.href === pathname,
                                },
                            )}
                        >
                            {link.text}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default Navbar

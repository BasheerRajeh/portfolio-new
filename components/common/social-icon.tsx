import { SocialLink } from '@/config/links'
import { cn } from '@/lib/utils'

import Link from './link'

type SocialIconProps = {
    socialLink: SocialLink
} & React.HTMLAttributes<HTMLDivElement>

const SociaIcon: React.FC<SocialIconProps> = ({ socialLink, className }) => {
    return (
        <Link
            className='no-underline'
            href={socialLink.href}
        >
            <div className={cn('h-8 w-8', className)}>{socialLink.icon}</div>
        </Link>
    )
}

export default SociaIcon

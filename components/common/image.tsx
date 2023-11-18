'use client'
import NextImage from 'next/image'
import { useState } from 'react'

import { cn } from '@/lib/utils'

type ImageProps = {
    imageClassName?: string
    lazy?: boolean
} & React.ComponentPropsWithoutRef<typeof NextImage>

const Image: React.FC<ImageProps> = ({
    src,
    alt,
    imageClassName,
    className,
    lazy = true,
    ...rest
}) => {
    const [isLoading, setIsLoading] = useState(true)
    return (
        <div
            className={cn(
                'overflow-hidden',
                isLoading && 'animate-pulse',
                className,
            )}
        >
            <NextImage
                src={src}
                alt={alt}
                className={cn(
                    'transition-[scale,filter] duration-700',
                    isLoading && 'scale-[1.02] blur-xl',
                    imageClassName,
                )}
                loading={lazy ? 'lazy' : undefined}
                priority={!lazy}
                quality={100}
                onLoad={() => setIsLoading(false)}
                draggable='false'
                {...rest}
            />
        </div>
    )
}

export default Image

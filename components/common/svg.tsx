import { cn } from '@/lib/utils'

type SvgProps = React.HTMLAttributes<SVGElement>

const Svg = {
    noise: (props: SvgProps) => (
        <svg
            className={cn(
                'pointer-events-none fixed isolate z-50 opacity-70 mix-blend-soft-light',
                props.className,
            )}
            width='100%'
            height='100%'
            {...props}
        >
            <filter id='pedroduarteisalegend'>
                <feTurbulence
                    type='fractalNoise'
                    baseFrequency='0.80'
                    numOctaves='4'
                    stitchTiles='stitch'
                />
            </filter>
            <rect
                width='100%'
                height='100%'
                filter='url(#pedroduarteisalegend)'
            />
        </svg>
    ),
}

export default Svg

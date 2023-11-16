type IconProps = {
    strokeWidth?: number | string
} & React.HTMLAttributes<SVGElement>

const Icons = {
    logo: (props: IconProps) => (
        <svg
            viewBox='0 0 37.54 50.03'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className={props.className}
            {...props}
        >
            <path
                d='M8.18,23.28V6.91h5.41c3.71,0,6.5.62,8.34,1.85s2.78,3.26,2.78,6.09a7.72,7.72,0,0,1-2.57,6.3c-1.71,1.41-5.89,2.12-9.7,2.12,0,0,8.23,15,11.23,19.2C27.88,48.34,37.54,50,37.54,50L23.41,27.89q9.7-4,9.71-13.31c0-4.88-1.55-8.54-4.65-10.95S20.59,0,14.13,0H0V23.28'
                stroke='currentColor'
                fill='currentColor'
                opacity='1'
            />
        </svg>
    ),
}

export default Icons

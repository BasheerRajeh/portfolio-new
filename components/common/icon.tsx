/* eslint-disable sonarjs/no-duplicate-string */
import { ReactNode } from 'react'

import { cn } from '@/lib/utils'

type IconProps = {
    strokeWidth?: number | string
} & React.HTMLAttributes<SVGElement>

type IconsType = Record<string, (props: IconProps) => React.ReactNode>

const Icons: IconsType = {
    logo: (props: IconProps): ReactNode => (
        <svg
            viewBox='0 0 37.54 50.03'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className={cn('h-full w-full', props.className)}
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
    facebook: (props: IconProps): ReactNode => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            className={cn('h-full w-full', props.className)}
            {...props}
        >
            <path
                fill='currentColor'
                fillRule='evenodd'
                d='M10.488 3.788A5.25 5.25 0 0 1 14.2 2.25h2.7a.75.75 0 0 1 .75.75v3.6a.75.75 0 0 1-.75.75h-2.7a.15.15 0 0 0-.15.15v1.95h2.85a.75.75 0 0 1 .728.932l-.9 3.6a.75.75 0 0 1-.728.568h-1.95V21a.75.75 0 0 1-.75.75H9.7a.75.75 0 0 1-.75-.75v-6.45H7a.75.75 0 0 1-.75-.75v-3.6A.75.75 0 0 1 7 9.45h1.95V7.5a5.25 5.25 0 0 1 1.538-3.712ZM14.2 3.75a3.75 3.75 0 0 0-3.75 3.75v2.7a.75.75 0 0 1-.75.75H7.75v2.1H9.7a.75.75 0 0 1 .75.75v6.45h2.1V13.8a.75.75 0 0 1 .75-.75h2.114l.525-2.1H13.3a.75.75 0 0 1-.75-.75V7.5a1.65 1.65 0 0 1 1.65-1.65h1.95v-2.1H14.2Z'
                clipRule='evenodd'
            />
        </svg>
    ),
    youtube: (props: IconProps): ReactNode => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            className={cn('h-full w-full', props.className)}
            {...props}
        >
            <path
                fill='currentColor'
                d='m10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73Z'
            />
        </svg>
    ),
    telegram: (props: IconProps): ReactNode => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            className={cn('h-full w-full', props.className)}
            {...props}
        >
            <path
                fill='currentColor'
                d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19c-.14.75-.42 1-.68 1.03c-.58.05-1.02-.38-1.58-.75c-.88-.58-1.38-.94-2.23-1.5c-.99-.65-.35-1.01.22-1.59c.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02c-.09.02-1.49.95-4.22 2.79c-.4.27-.76.41-1.08.4c-.36-.01-1.04-.2-1.55-.37c-.63-.2-1.12-.31-1.08-.66c.02-.18.27-.36.74-.55c2.92-1.27 4.86-2.11 5.83-2.51c2.78-1.16 3.35-1.36 3.73-1.36c.08 0 .27.02.39.12c.1.08.13.19.14.27c-.01.06.01.24 0 .38z'
            />
        </svg>
    ),
    linkedin: (props: IconProps): ReactNode => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            className={cn('h-full w-full', props.className)}
            {...props}
        >
            <g
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
            >
                <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z' />
                <circle
                    cx='4'
                    cy='4'
                    r='2'
                />
            </g>
        </svg>
    ),
    github: (props: IconProps): ReactNode => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            className={cn('h-full w-full', props.className)}
            {...props}
        >
            <path
                fill='currentColor'
                d='M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z'
            />
        </svg>
    ),
    instagram: (props: IconProps): ReactNode => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            className={cn('h-full w-full', props.className)}
            {...props}
        >
            <path
                fill='currentColor'
                d='M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z'
            />
        </svg>
    ),
    twitter: (props: IconProps): ReactNode => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            className={cn('h-full w-full', props.className)}
            {...props}
        >
            <path
                fill='currentColor'
                d='M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231l5.45-6.231Zm-1.161 17.52h1.833L7.045 4.126H5.078L17.044 19.77Z'
            />
        </svg>
    ),
    website: (props: IconProps): ReactNode => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            className={cn('h-full w-full', props.className)}
            {...props}
        >
            <g
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
            >
                <path d='M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m.6-3h16.8M3.6 15h16.8' />
                <path d='M11.5 3a17 17 0 0 0 0 18m1-18a17 17 0 0 1 0 18' />
            </g>
        </svg>
    ),
    sun: (props: IconProps): ReactNode => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            className={props.className}
            {...props}
        >
            <g
                fill='none'
                stroke='currentColor'
                strokeDasharray='2'
                strokeDashoffset='2'
                strokeLinecap='round'
                strokeWidth='2'
            >
                <path d='M0 0'>
                    <animate
                        fill='freeze'
                        attributeName='d'
                        begin='0.6s'
                        dur='0.2s'
                        values='M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1'
                    />
                    <animate
                        fill='freeze'
                        attributeName='stroke-dashoffset'
                        begin='0.6s'
                        dur='0.2s'
                        values='2;0'
                    />
                </path>
                <path d='M0 0'>
                    <animate
                        fill='freeze'
                        attributeName='d'
                        begin='0.9s'
                        dur='0.2s'
                        values='M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5'
                    />
                    <animate
                        fill='freeze'
                        attributeName='stroke-dashoffset'
                        begin='0.9s'
                        dur='1.2s'
                        values='2;0'
                    />
                </path>
                <animateTransform
                    attributeName='transform'
                    dur='30s'
                    repeatCount='indefinite'
                    type='rotate'
                    values='0 12 12;360 12 12'
                />
            </g>
            <mask id='lineMdMoonAltToSunnyOutlineLoopTransition0'>
                <circle
                    cx='12'
                    cy='12'
                    r='12'
                    fill='#fff'
                />
                <circle
                    cx='12'
                    cy='12'
                    r='8'
                >
                    <animate
                        fill='freeze'
                        attributeName='r'
                        dur='0.4s'
                        values='8;4'
                    />
                </circle>
                <circle
                    cx='18'
                    cy='6'
                    r='12'
                    fill='#fff'
                >
                    <animate
                        fill='freeze'
                        attributeName='cx'
                        dur='0.4s'
                        values='18;22'
                    />
                    <animate
                        fill='freeze'
                        attributeName='cy'
                        dur='0.4s'
                        values='6;2'
                    />
                    <animate
                        fill='freeze'
                        attributeName='r'
                        dur='0.4s'
                        values='12;3'
                    />
                </circle>
                <circle
                    cx='18'
                    cy='6'
                    r='10'
                >
                    <animate
                        fill='freeze'
                        attributeName='cx'
                        dur='0.4s'
                        values='18;22'
                    />
                    <animate
                        fill='freeze'
                        attributeName='cy'
                        dur='0.4s'
                        values='6;2'
                    />
                    <animate
                        fill='freeze'
                        attributeName='r'
                        dur='0.4s'
                        values='10;1'
                    />
                </circle>
            </mask>
            <circle
                cx='12'
                cy='12'
                r='10'
                fill='currentColor'
                mask='url(#lineMdMoonAltToSunnyOutlineLoopTransition0)'
            >
                <animate
                    fill='freeze'
                    attributeName='r'
                    dur='0.4s'
                    values='10;6'
                />
            </circle>
        </svg>
    ),
    moon: (props: IconProps): ReactNode => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            className={cn('h-full w-full', props.className)}
            {...props}
        >
            <g
                fill='currentColor'
                fillOpacity='0'
            >
                <path d='m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z'>
                    <animate
                        id='lineMdMoonFilledLoop0'
                        fill='freeze'
                        attributeName='fill-opacity'
                        begin='0.7s;lineMdMoonFilledLoop0.begin+6s'
                        dur='0.4s'
                        values='0;1'
                    />
                    <animate
                        fill='freeze'
                        attributeName='fill-opacity'
                        begin='lineMdMoonFilledLoop0.begin+2.2s'
                        dur='0.4s'
                        values='1;0'
                    />
                </path>
                <path d='M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z'>
                    <animate
                        fill='freeze'
                        attributeName='fill-opacity'
                        begin='lineMdMoonFilledLoop0.begin+3s'
                        dur='0.4s'
                        values='0;1'
                    />
                    <animate
                        fill='freeze'
                        attributeName='fill-opacity'
                        begin='lineMdMoonFilledLoop0.begin+5.2s'
                        dur='0.4s'
                        values='1;0'
                    />
                </path>
                <path d='M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z'>
                    <animate
                        fill='freeze'
                        attributeName='fill-opacity'
                        begin='lineMdMoonFilledLoop0.begin+0.4s'
                        dur='0.4s'
                        values='0;1'
                    />
                    <animate
                        fill='freeze'
                        attributeName='fill-opacity'
                        begin='lineMdMoonFilledLoop0.begin+2.8s'
                        dur='0.4s'
                        values='1;0'
                    />
                </path>
                <path d='m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z'>
                    <animate
                        fill='freeze'
                        attributeName='fill-opacity'
                        begin='lineMdMoonFilledLoop0.begin+3.4s'
                        dur='0.4s'
                        values='0;1'
                    />
                    <animate
                        fill='freeze'
                        attributeName='fill-opacity'
                        begin='lineMdMoonFilledLoop0.begin+5.6s'
                        dur='0.4s'
                        values='1;0'
                    />
                </path>
            </g>
            <g
                fillOpacity='0'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
            >
                <path
                    fill='currentColor'
                    strokeDasharray='56'
                    strokeDashoffset='56'
                    d='M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z'
                >
                    <animate
                        fill='freeze'
                        attributeName='stroke-dashoffset'
                        dur='0.6s'
                        values='56;0'
                    />
                    <animate
                        fill='freeze'
                        attributeName='fill-opacity'
                        begin='1.5s'
                        dur='0.5s'
                        values='0;1'
                    />
                </path>
            </g>
        </svg>
    ),
    verified: (props: IconProps): ReactNode => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            className={cn('h-full w-full', props.className)}
            {...props}
        >
            <path
                fill='currentColor'
                d='M10.007 2.104a3 3 0 0 0-3.595 1.49L5.606 5.17a1 1 0 0 1-.436.436l-1.577.806a3 3 0 0 0-1.49 3.595l.546 1.685a1 1 0 0 1 0 .616l-.545 1.685a3 3 0 0 0 1.49 3.595l1.576.806a1 1 0 0 1 .436.436l.806 1.577a3 3 0 0 0 3.595 1.49l1.685-.546a1 1 0 0 1 .616 0l1.685.545a3 3 0 0 0 3.595-1.489l.806-1.577a1 1 0 0 1 .436-.436l1.577-.805a3 3 0 0 0 1.49-3.596l-.546-1.685a1 1 0 0 1 0-.616l.545-1.685a3 3 0 0 0-1.489-3.595l-1.577-.806a1 1 0 0 1-.436-.436l-.805-1.577a3 3 0 0 0-3.596-1.49l-1.685.546a1 1 0 0 1-.616 0l-1.685-.545ZM6.76 11.757l1.414-1.414l2.828 2.829l5.657-5.657l1.415 1.414l-7.072 7.07l-4.242-4.242Z'
            />
        </svg>
    ),
}

export default Icons

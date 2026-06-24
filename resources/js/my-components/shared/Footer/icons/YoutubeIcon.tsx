import * as React from 'react';

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="none" viewBox="0 0 20 20" {...props}>
        <rect
            x="1"
            y="3.5"
            width="18"
            height="13"
            rx="4"
            stroke="currentColor"
            strokeWidth="1.66667"
        />
        <path
            d="M8 7.5L13 10L8 12.5V7.5Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
        />
    </svg>
);

export default YoutubeIcon;

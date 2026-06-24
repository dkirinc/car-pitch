import * as React from 'react';

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="none" viewBox="0 0 20 20" {...props}>
        <path
            d="M13.3333 0.833333H5C2.69881 0.833333 0.833333 2.69881 0.833333 5V13.3333C0.833333 15.6345 2.69881 17.5 5 17.5H13.3333C15.6345 17.5 17.5 15.6345 17.5 13.3333V5C17.5 2.69881 15.6345 0.833333 13.3333 0.833333Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
            transform="translate(0.833, 0.833) scale(0.9)"
        />
        <circle
            cx="10"
            cy="10"
            r="3.5"
            stroke="currentColor"
            strokeWidth="1.66667"
        />
    </svg>
);

export default InstagramIcon;

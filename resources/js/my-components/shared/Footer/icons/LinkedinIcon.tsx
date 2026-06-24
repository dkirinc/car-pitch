import * as React from 'react';

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="none" viewBox="0 0 20 20" {...props}>
        <path
            d="M5.83333 0.833333C7.15942 0.833333 8.43119 1.36012 9.36887 2.2978C10.3065 3.23548 10.8333 4.50725 10.8333 5.83333V11.6667H7.5V5.83333C7.5 5.39131 7.3244 4.96738 7.01184 4.65482C6.69928 4.34226 6.27536 4.16667 5.83333 4.16667C5.39131 4.16667 4.96738 4.34226 4.65482 4.65482C4.34226 4.96738 4.16667 5.39131 4.16667 5.83333V11.6667H0.833333V5.83333C0.833333 4.50725 1.36012 3.23548 2.2978 2.2978C3.23548 1.36012 4.50725 0.833333 5.83333 0.833333Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
            transform="translate(4, 4) scale(0.6)"
        />
        <path
            d="M4.16667 0.833333H0.833333V10.8333H4.16667V0.833333Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
            transform="translate(2, 6) scale(0.6)"
        />
        <circle
            cx="3.5"
            cy="3.5"
            r="1.5"
            stroke="currentColor"
            strokeWidth="1.66667"
        />
    </svg>
);

export default LinkedinIcon;

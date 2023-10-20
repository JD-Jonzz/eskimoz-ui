import React from 'react'

/**
 * 
 * @param {*} size  - huge | big | medium | small | tiny
 */
const PinFilled = ({ size }) => {

    let width, height

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="none"
            viewBox="0 0 16 16"
        >
            <g clipPath="url(#a)">
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.353 13.333V10"
                />
                <path
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.013 10h6.68a.66.66 0 0 0 .383-1.197l-2.057-1.47v-2l1.704-1.135a.667.667 0 0 0 .296-.555v-.31a.667.667 0 0 0-.667-.667h-6a.667.667 0 0 0-.666.667v.31c0 .223.111.431.297.555l1.703 1.135v2l-2.057 1.47A.66.66 0 0 0 5.013 10Z"
                />
            </g>
            <defs>
                <clipPath id="a">
                    <path fill="none" d="M.353 0h16v16h-16z" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default PinFilled
import React from 'react'

/**
 * 
 * @param {*} size  - huge | big | medium | small | tiny
 */
const Pin = ({ size }) => {

    let width, height;
    

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
            <g>
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9 15v-3.75m-3.758 0h7.516a.742.742 0 0 0 .43-1.347L10.876 8.25V6l1.916-1.277a.75.75 0 0 0 .334-.624V3.75a.75.75 0 0 0-.75-.75h-6.75a.75.75 0 0 0-.75.75v.349c0 .25.125.485.334.624L7.125 6v2.25L4.811 9.903a.742.742 0 0 0 .431 1.347Z" />
            </g>
            <defs>
                <clipPath id="a">
                    <path fill="currentColor" d="M0 0h18v18H0z" />
                </clipPath>
            </defs>
        </svg>

    )
}

export default Pin




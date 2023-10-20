import React from 'react'

/**
 * 
 * @param {*} size  - huge | big | medium | small | tiny
 */
const FlagIT = ({ size }) => {

    let width, height

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 18" fill="none">
            <g id="Flags">
                    <rect id="Mask_2" x="0.25" y="0.25" width="23.5" height="16.6429" rx="1.75" fill="black" stroke="black" strokeWidth="0.5" />
                <mask id="mask0_850_80275" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="18">
                <rect id="Mask" x="0.25" y="0.25" width="23.5" height="16.6429" rx="1.75" fill="black" stroke="#F5F5F5" strokeWidth="0.5" />
                </mask>
                <g mask="url(#mask0_850_80275)">
                    <rect id="Mask_3" x="16" width="8" height="17.1429" fill="#DD2C00" />
                    <path id="Rectangle 2" fillRule="evenodd" clipRule="evenodd" d="M0 17.1429H8V0H0V17.1429Z" fill="#FFCE02" />
                </g>
            </g>
        </svg>
    )
}

export default FlagIT
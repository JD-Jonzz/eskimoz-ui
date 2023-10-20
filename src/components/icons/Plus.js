import React from 'react'

/**
 * 
 * @param {*} size  - huge | big | medium | small | tiny
 */
const Plus = ({ size }) => {

    let width, height

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 2.23804V11.7618" stroke="currentColor" stroke-width="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11.7621 7H2.23828" stroke="currentColor" stroke-width="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default Plus
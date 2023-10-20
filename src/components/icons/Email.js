import React from 'react'

/**
 * 
 * @param {*} size  - huge | big | medium | small | tiny
 */
const Email = ({ size }) => {

    let width, height

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="12" viewBox="0 0 15 12" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.227 1H13.2723C13.9503 1 14.5 1.54975 14.5 2.22775V10.2047C14.5 10.8827 13.9503 11.4318 13.273 11.4318H2.227C1.54975 11.4325 1 10.8827 1 10.2047V2.22775C1 1.54975 1.54975 1 2.227 1Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M1.08887 1.77222L6.85937 5.89947C7.38062 6.27222 8.08112 6.27297 8.60312 5.90097L14.4066 1.76172" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

export default Email
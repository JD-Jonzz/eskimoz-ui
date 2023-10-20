import React from 'react'

/**
 * 
 * @param {*} size  - huge | big | medium | small | tiny
 */
const Warning = ({ size }) => {

    let width, height


    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.9999 6.21655C9.33127 6.21655 9.5999 6.48518 9.5999 6.81655V9.93322C9.5999 10.2646 9.33127 10.5332 8.9999 10.5332C8.66853 10.5332 8.3999 10.2646 8.3999 9.93322V6.81655C8.3999 6.48518 8.66853 6.21655 8.9999 6.21655Z" fill="currentColor" />
            <path d="M10.6905 2.4494L17.073 13.6194C17.8146 14.9177 16.8771 16.5336 15.3821 16.5336H2.61714C1.12131 16.5336 0.183806 14.9177 0.926306 13.6194L7.30881 2.4494C8.05631 1.14024 9.94297 1.14024 10.6905 2.4494Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M8.99751 11.8C8.66631 11.8 8.39752 12.0688 8.39992 12.4C8.39992 12.7312 8.66871 13 8.99991 13C9.33111 13 9.5999 12.7312 9.5999 12.4C9.5999 12.0688 9.33111 11.8 8.99751 11.8Z" fill="currentColor" />
        </svg>
    )
}

export default Warning
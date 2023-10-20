import React from 'react'

/**
 * 
 * @param {*} size  - huge | big | medium | small | tiny
 */
const Checkmark = ({ size }) => {

    let width, height

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="13" viewBox="0 0 18 13" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.4247 0.575638C17.659 0.809953 17.659 1.18985 17.4247 1.42417L6.42465 12.4242C6.19034 12.6585 5.81044 12.6585 5.57613 12.4242L0.576127 7.42417C0.341812 7.18985 0.341812 6.80995 0.576127 6.57564C0.810441 6.34132 1.19034 6.34132 1.42465 6.57564L6.00039 11.1514L16.5761 0.575638C16.8104 0.341324 17.1903 0.341324 17.4247 0.575638Z" fill="currentColor" />
        </svg>
    )
}

export default Checkmark
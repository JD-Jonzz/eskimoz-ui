import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Text from '../text/text'

import { IconCheckmark, IconClose, IconInfo, IconWarning } from '../icons'

import './../../styles/modules/alert.css'


/**
 * *Parent has to be position:relative to apply center
 * @param {*} props 
 * @param {*} type    - success | warning | danger
 * @param {*} title   - type: string
 * @param {*} details - type: string
 */
const Alert = ({ type, title, details, show, onClose,...props }) => {

    let icon;

    if (type == 'success') {
        icon = <IconCheckmark />
    } else if (type == 'warning') {
        icon = <IconInfo />
    } else if (type == 'danger') {
        icon = <IconWarning />
    }

    return (
        <>
            { show && <div className='alert-container'>
                <div className={`alert-${type}-icon`}>
                   { icon }
                </div>
                <div>
                    <Text variant={'heading-5'}>{title}</Text>
                    <Text variant={'paragraph-small'}>{details}</Text>
                </div>
                <button className={`alert-close-icon`} onClick={onClose}>
                    <IconClose />
                </button>
            </div>}
        </>
    )
}

Alert.propTypes = {
    type: PropTypes.oneOf(['success', 'warning', 'danger']).isRequired,
    title: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
}

export default Alert
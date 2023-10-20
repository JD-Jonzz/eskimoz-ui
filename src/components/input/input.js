import React from 'react'
import PropTypes from 'prop-types'
import Text from '../text/text'

import './../../styles/modules/input.css'
import { IconEmail } from '../icons'

/**
 * Extands all input props, in addition to our params
 * @param {*} type          - text | email | url
 * @param {*} label         - 
 * @param {*} required      - boolean 
 */
const Input = ({ type, label, required, ...props }) => {

    const Label = () => (
        <div className='input-label'>
            <Text variant={'heading-6'}>{label}</Text>
            {required && <span className='asterisk-input'>*</span>}
        </div>
    )

    if (type == 'text') {
        return (
            <div className='input-container'>
                { label && <Label /> }
                <div className=''>
                    <input type="text" className='input-element input-text' required={required && required} {...props} />
                </div>
            </div>
        )
    }

    return (
        <div className='input-container'>
            { label && <Label /> }
            <div className='input-url-email-container'>
                <div className='input-side'>
                    {type == 'email' && <IconEmail />}
                    {type == 'url' && <Text variant={'paragraph-small'}>https://</Text>}
                </div>
                <input type={type} className='input-element input-url-email' {...props} />
            </div>
        </div>
    )
}

Input.propTypes = {
    type: PropTypes.oneOf(['text', 'email', 'url']),
    label: PropTypes.string,
    required: PropTypes.bool,
}

export default Input








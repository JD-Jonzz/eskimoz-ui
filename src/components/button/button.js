import React, { ReactNode } from "react";
import PropTypes from 'prop-types';
import Text from "../text/text";

import './../../styles/modules/button.css'
import './../../styles/state/button.css'


/**
 * All different kind of button options
 *
 * @type {Object}
*/

/**
 * DEFAULT
 * The primary button
 *
 * @param  {string}    text        - text
 * @param  {string}    variant     - primary | secondary | danger | icon | link
 * @param  {string}    size        - large | small
 * @param  {boolean}   disabled    - true | false
 * @param  {Object}    icon        - SVG icon
 * @param  {boolean}   width       - full | fit
 * @param  {string}   className    
*/

const Button = ({ text, variant = 'primary', size, icon, disabled, width, className, ...props }) => {

    let buttonClass = `button button-${variant} width-${width} `

    if (variant == 'primary' || variant == 'secondary') {
        buttonClass += `button-${size}`
    }

    return (
        <button {...props} className={`${buttonClass} ${className}`} disabled={disabled}>
            {(icon && variant != 'danger') ? icon : null}
            {(variant != 'icon') && text}
        </button>
    )
}


Button.propTypes = {
    text: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['primary', 'secondary', 'danger', 'icon', 'link']),
    width: PropTypes.oneOf(['full', 'fit']),
    size: PropTypes.oneOf(['large', 'small']),
    disabled: PropTypes.bool,
    icon: PropTypes.node
};

export default Button




/**
 * DEFAULT
 * The primary button
 *
 * @param  {string}    text        - text
 * @param  prop    extande all button attributes
*/
const ButtonDropdown = ({ text, open, ...props }) => {
    return (
        <button {...props} className='dropdown-button'>
            <Text variant={'paragraph-small'}>{text}</Text>
            <Icon style={{transform: open && 'rotate(180deg)', transitionDuration: '200ms'}} />
        </button>
    )
}
ButtonDropdown.propTypes = {
    text: PropTypes.string.isRequired,
    open: PropTypes.bool
};

export { ButtonDropdown }




function Icon({...props}) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
            <path d="M7.28572 2.50021L3.89286 5.89307L0.5 2.50021" stroke="#1C1D1E" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Checkbox, Radio, Space } from 'antd'

import { ButtonDropdown } from "../button/button";

import './../../styles/modules/radio-dropdown.css'



/** 
 * Checkbox Dropdown
 * @param  options    - Array: [{ name: string | number, value: string | number }]
 * @param  label      - string
 * @param  value      - Selected items
 * @param  onChange   - Callback
 * @param  width      - If not set, 100% by default
*/
const RadioDropdown = ({ options, label, onChange, value, width, ...props }) => {

    const [showDropdown, setShowDropdown] = useState(false)
    
    const handleChange = e => {
        onChange(e)
    }

    return (
        <div className="radio-dropdown-container" style={{width: width && width}}>
            <div className=''>
                <ButtonDropdown text={label} onClick={() => setShowDropdown(!showDropdown)} open={showDropdown}/>
            </div>
           { showDropdown && <div className="radio-dropdown">
                <div className='radio-dropdown-options'>
                    <Checkbox.Group className="w-full" onChange={handleChange} >
                        <Space direction="vertical" className="w-full">
                            {options.map((option) => (
                                <Checkbox value={option.value} className={`dropdown-radio-item ${option.value == value && 'checked'}`}>
                                    {option.label}
                                </Checkbox>
                            ))}
                        </Space>
                    </Checkbox.Group>
                </div>
            </div>}
        </div>
    )
}

RadioDropdown.propTypes = {
    options: PropTypes.array.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    width: PropTypes.string,
}

export default RadioDropdown




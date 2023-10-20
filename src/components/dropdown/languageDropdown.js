import { Dropdown, Space } from 'antd';
import React, { Fragment, useEffect, useState } from 'react'

import './../../styles/modules/language-dropdown.css'
import PropTypes from 'prop-types';
import { IconFlagFR, IconFlagIT, IconFlagUK } from '../icons';


/**
 * A language dropdown component.
 *
 */
const LanguageDropdown = ({ onSelect, ...props }) => {

    const list= [
        { icon: <IconFlagFR />, name: 'Français', value: 'français' },
        { icon: <IconFlagUK />, name: 'English', value: 'english' },
        { icon: <IconFlagIT />, name: 'Espagnol', value: 'espagnol' },
        { icon: <IconFlagIT />, name: 'Allemand', value: 'allemand' },
    ];
    
    const [showDropdown, setShowDropdown] = useState(false);
    const [activeItems, setActiveItems] = useState([]);

    const handleItemClick = (value) => {
        if (activeItems.includes(value)) {
            setActiveItems(activeItems.filter((item) => item !== value));
        } else {
            setActiveItems([...activeItems, value]);
        }
    };

    
    const handleArrowButtonClick = (event) => {
        event.stopPropagation();
        setShowDropdown(!showDropdown);
    };

    useEffect(() => {
        onSelect(activeItems);
    }, [activeItems, onSelect]);

    return (
        <div>
            <div className="language-dropdown-container">
                {list.map((item) => {
                    const isActive = activeItems.includes(item.value);

                    if (item.value === 'français') {
                        return (
                            <button
                                className={`language-dropdown-button ${isActive && 'active'}`}
                                type="button"
                                key={item.name}
                                onClick={() => handleItemClick(item.value)}
                            >
                                <div className="language-dropdown-info">
                                    {item.icon}
                                    <span>{item.name}</span>
                                </div>
                                <span onClick={handleArrowButtonClick} className="language-dropdown-arrow">
                                    <Arrow />
                                </span>
                            </button>
                        );
                    }

                    return (
                        <Fragment key={item.name}>
                            {showDropdown && (
                                <button
                                    className={`language-dropdown-button ${isActive && 'active'}`}
                                    type="button"
                                    onClick={() => handleItemClick(item.value)}
                                >
                                    <span className="language-dropdown-info">
                                        {item.icon}
                                        <span>{item.name}</span>
                                    </span>
                                </button>
                            )}
                        </Fragment>
                    );
                })}
            </div>
        </div>
    );
};

LanguageDropdown.propTypes = {
    onSelect: PropTypes.func,
};

export default LanguageDropdown;



function Arrow() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={8} height={5} viewBox="0 0 8 5" fill="none">
            <path d="M7.28572 1.07144L3.89286 4.46429L0.5 1.07144" stroke="#1C1D1E" strokeWidth={0.8} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}





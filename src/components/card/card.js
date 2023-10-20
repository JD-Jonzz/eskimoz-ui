import React from 'react'
import PropTypes from 'prop-types'
import Text from '../text/text'
import { IconLink, IconPin, IconPinFilled, IconPlus, IconThreedots } from '../icons'

import './../../styles/modules/card.css'
import Button from '../button/button'

/**
 * 
 * @param {*} props 
 * @param {*} type - default | empty
 */
const Card = ({ type, title, date, pinned, props }) => {


    if (type == 'empty') {
        return (
            <button className='empty-card'>
                <div className='empty-card-hover'>
                    <Text variant={'heading-2'}>Ajouter un lien</Text>
                    <div className='empty-card-icon'>
                        <IconPlus />
                    </div>
                </div>
            </button>
        )
    }


    const PinIcon = () => (
        <>
            {pinned ?
                <span className='card-link-pin-filled'>
                    <IconPinFilled />
                </span>
                :
                <span>
                    <IconPin />
                </span>
            }
        </>
    )


    return (
        <div className='card-link-container'>
            <div className='card-link-header'>
                <div className='card-link-header-icon'>
                    <Button variant='icon' icon={<IconLink />} />
                    <Button variant='icon' icon={<PinIcon />} />
                </div>
            </div>
            <div className='card-link-control'>
                <div className='card-link-info'>
                    <Text variant={'heading-4'}>{title}</Text>
                    <Text variant={'paragraph-tiny'}>{date}</Text>
                </div>

                <button>
                    <IconThreedots />
                </button>
            </div>

        </div>
    )
}

Card.propTypes = {
    type: PropTypes.oneOf(['default', 'empty']),
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    pinned: PropTypes.bool
}

export default Card
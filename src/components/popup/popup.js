import React, { ReactNode } from "react";
import Button from "../button/button";
import Text from "../text/text";

import './../../styles/modules/popup.css'

// interface Props {
//     variant: 'danger',
//     title: string,
//     details: string,
//     icon
// }

/**
 * @param  {boolean}   icon        - SVG icon
 * @param  {string}    title       - title
 * @param  {string}    details     - details
*/
export const PopupRed = ({ title, details, icon, onConfirm, onCancel, ...props }) => {

    return (
        <div className="popup-container">
            <div className="popup-icon">
                {icon}
            </div>

            <div className="popup-info">
                <Text variant="heading-5" align="center">{title}</Text>
                <Text variant="paragraph-small" align="center">{details}</Text>
            </div>

            <div className="popup-buttons">
                <Button text='Cancel' variant="secondary" width="full" onClick={onCancel} />
                <Button text="Confirm" variant="danger" width="full" onClick={onConfirm} />
            </div>

        </div>
    )
}
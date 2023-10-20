import React, { ReactNode } from "react";
import "./../../styles/modules/text.css";
import PropTypes from "prop-types";

/**
 * @param {string} variant - Valid values: 'heading-1', 'heading-2', 'heading-3', 'heading-4', 'heading-5', 'heading-6', 'paragraph-big', 'paragraph-medium', 'paragraph-small', 'paragraph-tiny', 'cta', or 'link'.
 * @param {string} align - Valid values: 'left', 'center', 'right'
 */

const Text = ({ children, variant, align, className, ...props }) => {
  return (
    <p className={`text ${variant} text-${align} ${className} `} {...props}>
      {children}
    </p>
  );
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    "heading-1",
    "heading-2",
    "heading-3",
    "heading-4",
    "heading-5",
    "heading-6",
    "paragraph-big",
    "paragraph-medium",
    "paragraph-small",
    "paragraph-tiny",
    "cta",
    "link",
  ]),
};

export default Text;

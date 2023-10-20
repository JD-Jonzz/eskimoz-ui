import React, { useState } from "react";
import "./../../styles/modules/sideNavigationMenu.css";
import "./../../styles/state/sideNavigationMenu.css";
import { ArrowRight } from "../../icons/ArrowRight";
import Text from "../text/text";
import PropTypes from "prop-types";

/**
 * DEFAULT
 * The primary menu without subtitle
 * @param  {string}    variant     - primary | secondary
 * @param data - array of objects with title, icon and action
 * @param logo - image src
 * @param title - menu title
 * @param subTitle - menu subtitle
 */
const SideNavigationMenu = ({
  variant = "primary",
  data,
  logo,
  title,
  subTitle,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuActiveClass =
    isMenuOpen && variant !== "primary" ? `menu-text-active` : "";
  const menuLogoClass = `menu-logo-${variant}`;
  const menuTitleClass = `menu-title-${variant} ${menuActiveClass}`;
  const menuButtonIconClass = `menu-button-icon-${variant} ${menuActiveClass}`;

  function onMenuOptionClick(itemAction) {
    itemAction();
    setIsMenuOpen(false);
  }

  return (
    <div className={"menu-container"}>
      <button
        className={"menu-button"}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className={"menu-button-container"}>
          <img className={menuLogoClass} src={logo} alt="Eskimoz" />
          <div className={"text-container"}>
            <Text variant={"heading-4"} className={menuTitleClass}>
              {title}
            </Text>
            {variant === "primary" ? (
              <></>
            ) : (
              <Text
                variant={"paragraph-tiny"}
                className={`menu-subtitle ${menuActiveClass}`}
              >
                {subTitle}
              </Text>
            )}
          </div>
        </div>
        <span className={menuButtonIconClass}>
          <ArrowRight size={8} />
        </span>
      </button>
      {isMenuOpen && data && data.length > 0 ? (
        <div className={"menu-options-container"}>
          {data.map((item, index) => {
            return (
              <>
                <button
                  key={index}
                  className={"menu-option"}
                  onClick={() => onMenuOptionClick(item.action)}
                >
                  {item.icon}
                  <Text variant={"paragraph-small"}>{item.title}</Text>
                </button>
                {index === 0 || index === data.length - 2 ? (
                  <hr color={"#DADADA"} size={1} />
                ) : (
                  <></>
                )}
              </>
            );
          })}
        </div>
      ) : (
        <> </>
      )}
    </div>
  );
};

SideNavigationMenu.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary"]),
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      icon: PropTypes.node.isRequired,
      action: PropTypes.func.isRequired,
    })
  ),
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};

export default SideNavigationMenu;

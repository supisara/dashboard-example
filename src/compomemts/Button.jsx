import React from "react";

const renderButton = (
  type,
  name,
  label,
  iconFirst,
  iconSecond,
  border,
  bgColor = "bg-white",
  color = "text-gray-dark",
  widethFull
) => {
  switch (type) {
    case "icon":
      return (
        <button
          name={name}
          className={CustomButtonIconStyle(border, bgColor, color)}
        >
          {iconFirst}
        </button>
      );
    case "normal":
      return (
        <button
          name={name}
          className={CustomButtonStyle(border, bgColor, color, widethFull)}
        >
          <p>{label}</p>
        </button>
      );
    case "normal-i":
      return (
        <button
          name={name}
          className={CustomButtonStyle(border, bgColor, color, widethFull)}
        >
          {iconFirst} <p>{label}</p> {iconSecond}
        </button>
      );
  }
};

const CustomButtonIconStyle = (border, bgColor, color) => {
  const cssAttribute = "button-icon flex items-center";

  if (border || bgColor || color) {
    return `${cssAttribute} 
    ${border ? "border border-gray-light" : ""} 
    ${bgColor ? bgColor : ""}
    ${color ? color : ""}`;
  } else {
    return `${cssAttribute}`;
  }
};

const CustomButtonStyle = (border, bgColor, color, widethFull) => {
  const cssAttribute =
    "button-normal flex place-content-center items-center space-x-2 h-10";

  if (border || bgColor || color || widethFull) {
    return `${cssAttribute} 
    ${border ? "border-2 border-border-gray" : ""} 
    ${bgColor ? bgColor : ""}
    ${color ? color : ""}
    ${widethFull ? "w-full" : ""}`;
  } else {
    return `${cssAttribute}`;
  }
};

const Button = (props) => {
  return (
    <>
      {renderButton(
        props.type,
        props.name,
        props.label,
        props.iconFirst,
        props.iconSecond,
        props.border,
        props.bgColor,
        props.color,
        props.widethFull
      )}
    </>
  );
};

export default Button;

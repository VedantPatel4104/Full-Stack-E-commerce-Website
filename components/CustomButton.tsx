import React from "react";

interface CustomButtonProps {
  paddingX: number;
  paddingY: number;
  text: string;
  buttonType: "submit" | "reset" | "button";
  customWidth: string;
  textSize: string;
  onClick?: () => void | Promise<void>;
  disabled?: boolean; // ✅ Added support for disabled
}

const CustomButton = ({
  paddingX,
  paddingY,
  text,
  buttonType,
  customWidth,
  textSize,
  onClick,
  disabled,
}: CustomButtonProps) => {
  return (
    <button
      type={buttonType}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${customWidth !== "no" ? `w-${customWidth}` : ""}
        uppercase 
        bg-white 
        px-${paddingX} 
        py-${paddingY} 
        text-${textSize} 
        border 
        border-black 
        border-gray-300 
        font-bold 
        text-blue-600 
        shadow-sm 
        hover:bg-black 
        hover:bg-gray-100 
        focus:outline-none 
        focus:ring-2 
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
      `}
    >
      {text}
    </button>
  );
};

export default CustomButton;

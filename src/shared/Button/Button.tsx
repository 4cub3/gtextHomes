import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  onclick?: () => void;
  type: "button" | "submit" | "reset" | undefined;
  allRound?: boolean;
  secondary?: boolean;
  children: React.ReactNode;
  className?: string;
  primary?: boolean;
  link?: string;
}

const Button: React.FC<ButtonProps> = ({
  onclick,
  type = "button",
  allRound = false,
  secondary = false,
  primary = false,
  className,
  children,
  link = '/home',
}) => {
  return (
    <Link to={link}
      className={`px-16 py-5  ${secondary && "bg-red-gtext"} ${
        allRound && "rounded-lg"
      } ${primary && "bg-blue-10"} ${className ? className : "text-white"} `}
      type={type}
      onClick={onclick}
    >
      {children}
    </Link>
  );
};

export default Button;

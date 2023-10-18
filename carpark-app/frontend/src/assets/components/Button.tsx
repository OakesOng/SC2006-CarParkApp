import React, { CSSProperties, Children, ReactNode } from "react";

interface Props {
  children: string;
  color?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

const Button = ({
  children,
  color = "primary",
  style = {},
  onClick,
}: Props) => {
  return (
    <div>
      <button type="submit" className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;

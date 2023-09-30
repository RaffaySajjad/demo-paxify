import styled from "@emotion/styled";

import React from "react";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const StyledButton = styled("a")<{
  btnType: "PRIMARY" | "SECONDARY";
  btnSize: "small" | "medium" | "large";
}>`
  display: flex !important;
  align-items: center !important;
  font-family: "Robo Slab", "Nunito Sans", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  font-weight: 700;
  border: 0;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  border: 1px solid black;
  border-radius: 10px;
  max-height: 22px;
  text-decoration: none;
  color: ${(props) => (props.btnType === "PRIMARY" ? "white" : "#333")};
  background-color: ${(props) =>
    props.btnType === "SECONDARY" ? "white" : "black"};
  font-size: ${(props) =>
    props.btnSize === "small"
      ? "12px"
      : props.btnSize === "medium"
      ? "14px"
      : "16px"};
  padding: ${(props) =>
    props.btnSize === "small"
      ? "10px 16px"
      : props.btnSize === "medium"
      ? "11px 20px"
      : "12px 24px"};
  height: 52px;

  &:hover {
    box-shadow: 4px 4px 0px #31debf;
  }
`;

export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      btnType={primary ? "PRIMARY" : "SECONDARY"}
      btnSize={size}
      href="mailto:support@paxify.io?subject=I want to know more about Paxify!"
      style={{ backgroundColor }}
      {...props}>
      {label}
    </StyledButton>
  );
};

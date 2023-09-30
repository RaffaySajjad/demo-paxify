import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { BUSINESS_THEME, ThemeType } from "./BUSINESS_THEME";
import { mq } from "./responsive";

export const commonTextPartial = css`
  display: inline;
  position: relative;
  z-index: 1;
  word-break: break-word;
  margin: 0;
  white-space: break-spaces;
`;

export const hyperlinkMsgPartial = css`
  display: inline;
  position: relative;
  z-index: 1;
  word-break: break-word;
  margin: 0;
  line-height: 1.5;
  white-space: break-spaces;
  cursor: pointer;
`;

interface TextProps {
  fontWeight?: "semiBold" | "normal";
  color?: string;
  theme?: ThemeType;
}

export const Title = styled("div")<TextProps>`
  font-family: "Roboto Slab", sans-serif;
  font-size: ${(props) => "36px"};
  ${mq.medium} {
    font-size: ${(props) => "47px"};
  }
  color: ${(props) => (props.color ? "black" : "#242832")};
  font-weight: 600;
  ${commonTextPartial};
`;

export const H1 = styled("div")<TextProps>`
  font-family: "Roboto Slab", sans-serif;
  line-height: 35.61px;
  font-size: ${(props) => "27px"};
  ${mq.medium} {
    line-height: 46.8px;
    font-size: ${(props) => "36px"};
  }
  color: ${(props) => (props.color ? "black" : "#242832")};
  font-weight: 600;
  ${commonTextPartial};
`;

// Configured
export const H2 = styled("h2")<TextProps>`
  font-family: "Inter", sans-serif;
  font-size: ${(props) => "21px"};
  ${mq.medium} {
    font-size: ${(props) => "27px"};
  }
  color: ${(props) => (props.color ? "black" : "#242832")};
  font-weight: 600;
  ${commonTextPartial};
`;

export const H3 = styled("h3")<TextProps>`
  font-family: "Inter";
  line-height: 25.6px;
  font-size: ${(props) => "16px"};
  ${mq.medium} {
    font-size: ${(props) => "21px"};
    line-height: 28px;
  }
  color: ${(props) => (props.color ? "black" : "#242832")};
  font-weight: ${(props) => (props.fontWeight ? "400" : "600")};
  ${commonTextPartial};
`;

export const H4 = styled("h4")<TextProps>`
  font-size: ${(props) => "14px"};
  ${mq.medium} {
    font-size: ${(props) => "16px"};
  }
  color: ${(props) => (props.color ? "black" : "#242832")};
  font-weight: ${(props) => (props.fontWeight ? "400" : "600")};
  ${commonTextPartial};
`;

// Configured
export const Body1 = styled("div")<TextProps>`
  font-family: "Inter", sans-serif;
  line-height: 25.6px;
  font-size: ${(props) => "16px"};
  ${mq.medium} {
    line-height: 33.6px;
    font-size: ${(props) => "21px"};
  }
  color: ${(props) => (props.color ? "black" : "#242832")};
  font-weight: ${(props) => (props.fontWeight ? "400" : "600")};
  ${commonTextPartial};
`;

export const Body2 = styled("div")<TextProps>`
  font-size: ${(props) => "16px"};
  line-height: 25.6px;
  color: ${(props) => (props.color ? "black" : "#242832")};
  font-weight: ${(props) => (props.fontWeight ? "400" : "600")};
  ${commonTextPartial};
`;

export const Body3 = styled("div")<TextProps>`
  font-size: ${(props) => "14px"};
  color: ${(props) => (props.color ? "black" : "#242832")};
  font-weight: ${(props) => (props.fontWeight ? "400" : "600")};
  ${commonTextPartial};
`;

export const Body4 = styled("div")<TextProps>`
  font-size: 12px;
  color: ${(props) => (props.color ? "black" : "#242832")};
  font-weight: ${(props) => (props.fontWeight ? "400" : "600")};
  ${commonTextPartial};
`;

export const Footnote = styled("div")<TextProps>`
  font-size: ${(props) => "9px"};
  color: ${(props) => (props.color ? "black" : "#242832")};
  font-weight: ${(props) => (props.fontWeight ? "400" : "600")};
  ${commonTextPartial};
`;

export const ErrorMsg = styled("div")<TextProps>`
  font-size: ${(props) => "9px"};
  color: ${(props) => (props.color ? "black" : "#242832")};
  font-weight: ${(props) => (props.fontWeight ? "400" : "600")};
  ${commonTextPartial};
`;

export const Span1 = styled("span")`
  font-family: "Inter";
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  color: ${BUSINESS_THEME.colors.navbar.lightGrey};
`;

export const Span2 = styled(Span1)`
  font-size: 14px;
  line-height: 20px;
`;

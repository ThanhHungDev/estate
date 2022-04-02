import * as React from "react";

const SvgRectanglePortrait = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M0 464V48C0 21.5 21.5 0 48 0h288c26.5 0 48 21.5 48 48v416c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48z" />
  </svg>
);

SvgRectanglePortrait.displayName = "SvgRectanglePortrait";
SvgRectanglePortrait.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgRectanglePortrait;

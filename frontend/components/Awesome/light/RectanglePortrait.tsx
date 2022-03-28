import * as React from "react";

const SvgRectanglePortrait = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M384 464V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48zM48 480c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v416c0 8.8-7.2 16-16 16H48z" />
  </svg>
);

SvgRectanglePortrait.displayName = "SvgRectanglePortrait";
SvgRectanglePortrait.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgRectanglePortrait;

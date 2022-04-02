import * as React from "react";

const SvgRectanglePortrait = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 385 512" {...props}>
    <path d="M385 464V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h289c26.5 0 48-21.5 48-48zm-337-6V54c0-3.3 2.7-6 6-6h277c3.3 0 6 2.7 6 6v404c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6z" />
  </svg>
);

SvgRectanglePortrait.displayName = "SvgRectanglePortrait";
SvgRectanglePortrait.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgRectanglePortrait;

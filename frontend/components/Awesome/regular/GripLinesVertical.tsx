import * as React from "react";

const SvgGripLinesVertical = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 256 512" {...props}>
    <path d="M96 464V48c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16v416c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16zm112 0V48c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16v416c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16z" />
  </svg>
);

SvgGripLinesVertical.displayName = "SvgGripLinesVertical";
SvgGripLinesVertical.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgGripLinesVertical;

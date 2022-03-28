import * as React from "react";

const SvgGripLinesVertical = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 256 512" {...props}>
    <path d="M192 472V40c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v432c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8zm-96 0V40c0-4.4-3.6-8-8-8H72c-4.4 0-8 3.6-8 8v432c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8z" />
  </svg>
);

SvgGripLinesVertical.displayName = "SvgGripLinesVertical";
SvgGripLinesVertical.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgGripLinesVertical;

import * as React from "react";

const SvgValueAbsolute = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M24 32H8c-4.4 0-8 3.6-8 8v432c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V40c0-4.4-3.6-8-8-8zm416 0h-16c-4.4 0-8 3.6-8 8v432c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V40c0-4.4-3.6-8-8-8zM325.7 165.6l-11.3-11.3c-3.1-3.1-8.2-3.1-11.3 0l-79 79-79-79c-3.1-3.1-8.2-3.1-11.3 0l-11.3 11.3c-3.1 3.1-3.1 8.2 0 11.3l79 79-79 79c-3.1 3.1-3.1 8.2 0 11.3l11.3 11.3c3.1 3.1 8.2 3.1 11.3 0l79-79 79 79c3.1 3.1 8.2 3.1 11.3 0l11.3-11.3c3.1-3.1 3.1-8.2 0-11.3l-79-79 79-79c3.1-3.1 3.1-8.1 0-11.3z" />
  </svg>
);

SvgValueAbsolute.displayName = "SvgValueAbsolute";
SvgValueAbsolute.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgValueAbsolute;

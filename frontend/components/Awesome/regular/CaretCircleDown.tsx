import * as React from "react";

const SvgCaretCircleDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M157.1 216h197.8c10.7 0 16.1 13 8.5 20.5l-98.9 98.3c-4.7 4.7-12.2 4.7-16.9 0l-98.9-98.3c-7.7-7.5-2.3-20.5 8.4-20.5zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-48 0c0-110.5-89.5-200-200-200S56 145.5 56 256s89.5 200 200 200 200-89.5 200-200z" />
  </svg>
);

SvgCaretCircleDown.displayName = "SvgCaretCircleDown";
SvgCaretCircleDown.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCaretCircleDown;

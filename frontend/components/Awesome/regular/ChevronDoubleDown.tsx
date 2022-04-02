import * as React from "react";

const SvgChevronDoubleDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M441.9 89.7L232.5 299.1c-4.7 4.7-12.3 4.7-17 0L6.1 89.7c-4.7-4.7-4.7-12.3 0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0L224 233.6 405.1 52.9c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17zm0 143l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L224 393.6 42.9 212.9c-4.7-4.7-12.3-4.7-17 0L6.1 232.7c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z" />
  </svg>
);

SvgChevronDoubleDown.displayName = "SvgChevronDoubleDown";
SvgChevronDoubleDown.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgChevronDoubleDown;

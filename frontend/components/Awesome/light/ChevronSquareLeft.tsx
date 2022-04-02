import * as React from "react";

const SvgChevronSquareLeft = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M448 432V80c0-26.5-21.5-48-48-48H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48zM48 448c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16h352c8.8 0 16 7.2 16 16v352c0 8.8-7.2 16-16 16H48zm96.4-200.5l115.1-115c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L184 256l99.5 99.5c4.7 4.7 4.7 12.3 0 17l-7.1 7.1c-4.7 4.7-12.3 4.7-17 0l-115.1-115c-4.5-4.8-4.5-12.4.1-17.1z" />
  </svg>
);

SvgChevronSquareLeft.displayName = "SvgChevronSquareLeft";
SvgChevronSquareLeft.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgChevronSquareLeft;

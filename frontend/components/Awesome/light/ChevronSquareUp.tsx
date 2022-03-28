import * as React from "react";

const SvgChevronSquareUp = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M48 480h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48zM32 80c0-8.8 7.2-16 16-16h352c8.8 0 16 7.2 16 16v352c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V80zm200.5 96.4l115 115.1c4.7 4.7 4.7 12.3 0 17l-7.1 7.1c-4.7 4.7-12.3 4.7-17 0L224 216l-99.5 99.5c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17l115-115.1c4.8-4.5 12.4-4.5 17.1.1z" />
  </svg>
);

SvgChevronSquareUp.displayName = "SvgChevronSquareUp";
SvgChevronSquareUp.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgChevronSquareUp;

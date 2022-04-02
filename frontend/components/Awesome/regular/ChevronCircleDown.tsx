import * as React from "react";

const SvgChevronCircleDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm8.5-107.5l122.8-122.8c4.7-4.7 4.7-12.3 0-17l-22.6-22.6c-4.7-4.7-12.3-4.7-17 0L256 277.8l-91.7-91.7c-4.7-4.7-12.3-4.7-17 0l-22.6 22.6c-4.7 4.7-4.7 12.3 0 17l122.8 122.8c4.7 4.7 12.3 4.7 17 0z" />
  </svg>
);

SvgChevronCircleDown.displayName = "SvgChevronCircleDown";
SvgChevronCircleDown.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgChevronCircleDown;

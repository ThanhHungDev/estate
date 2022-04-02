import * as React from "react";

const SvgTextWidth = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M363.31 292.68C354 283.36 336 288.36 336 304v56H112v-56c0-14.31-17.31-21.33-27.31-11.31l-80 80a16 16 0 000 22.63l80 80C94 484.64 112 479.64 112 464v-56h224v56c0 14.31 17.31 21.33 27.31 11.31l80-80a16 16 0 000-22.63zM432 32H16A16 16 0 000 48v80a16 16 0 0016 16h16a16 16 0 0016-16V96h144v144h-32a16 16 0 00-16 16v16a16 16 0 0016 16h128a16 16 0 0016-16v-16a16 16 0 00-16-16h-32V96h144v32a16 16 0 0016 16h16a16 16 0 0016-16V48a16 16 0 00-16-16z" />
  </svg>
);

SvgTextWidth.displayName = "SvgTextWidth";
SvgTextWidth.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTextWidth;

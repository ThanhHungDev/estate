import * as React from "react";

const SvgChalkboard = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M632 448h-24V64c0-17.67-14.33-32-32-32H64c-17.67 0-32 14.33-32 32v384H8c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h624c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8zm-344 0v-64h192v64H288zm224 0v-64c0-17.67-14.33-32-32-32H288c-17.67 0-32 14.33-32 32v64H64V64h512v384h-64z" />
  </svg>
);

SvgChalkboard.displayName = "SvgChalkboard";
SvgChalkboard.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgChalkboard;

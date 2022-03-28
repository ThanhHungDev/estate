import * as React from "react";

const SvgChartBar = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M424 352h16c4.4 0 8-3.6 8-8V104c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v240c0 4.4 3.6 8 8 8zm-96 0h16c4.4 0 8-3.6 8-8V200c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8zm-192 0h16c4.4 0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8zm96 0h16c4.4 0 8-3.6 8-8V136c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v208c0 4.4 3.6 8 8 8zm272 64H32V72c0-4.42-3.58-8-8-8H8c-4.42 0-8 3.58-8 8v360c0 8.84 7.16 16 16 16h488c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8z" />
  </svg>
);

SvgChartBar.displayName = "SvgChartBar";
SvgChartBar.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgChartBar;

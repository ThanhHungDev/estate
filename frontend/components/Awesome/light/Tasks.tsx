import * as React from "react";

const SvgTasks = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M145.35 207a8 8 0 00-11.35 0l-71 71-39-39a8 8 0 00-11.31 0L1.35 250.34a8 8 0 000 11.32l56 56a8 8 0 0011.31 0l88-88a8 8 0 000-11.32zM62.93 384c-17.67 0-32.4 14.33-32.4 32s14.73 32 32.4 32a32 32 0 000-64zm82.42-337A8 8 0 00134 47l-71 71-39-39a8 8 0 00-11.31 0L1.35 90.34a8 8 0 000 11.32l56 56a8 8 0 0011.31 0l88-88a8 8 0 000-11.32zM503 400H199a8 8 0 00-8 8v16a8 8 0 008 8h304a8 8 0 008-8v-16a8 8 0 00-8-8zm0-320H199a8 8 0 00-8 8v16a8 8 0 008 8h304a8 8 0 008-8V88a8 8 0 00-8-8zm0 160H199a8 8 0 00-8 8v16a8 8 0 008 8h304a8 8 0 008-8v-16a8 8 0 00-8-8z" />
  </svg>
);

SvgTasks.displayName = "SvgTasks";
SvgTasks.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTasks;

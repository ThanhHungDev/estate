import * as React from "react";

const SvgWatchCalculator = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M136 232h-32a8 8 0 00-8 8v32a8 8 0 008 8h32a8 8 0 008-8v-32a8 8 0 00-8-8zm72 72h-32a8 8 0 00-8 8v32a8 8 0 008 8h32a8 8 0 008-8v-32a8 8 0 00-8-8zm-72 0h-32a8 8 0 00-8 8v32a8 8 0 008 8h32a8 8 0 008-8v-32a8 8 0 00-8-8zm144 0h-32a8 8 0 00-8 8v32a8 8 0 008 8h32a8 8 0 008-8v-32a8 8 0 00-8-8zm-72-72h-32a8 8 0 00-8 8v32a8 8 0 008 8h32a8 8 0 008-8v-32a8 8 0 00-8-8zM320 81.61V32a32 32 0 00-32-32H96a32 32 0 00-32 32v49.61A80 80 0 000 160v192a80 80 0 0064 78.39V480a32 32 0 0032 32h192a32 32 0 0032-32v-49.61A80 80 0 00384 352V160a80 80 0 00-64-78.39zM96 32h192v48H96zm192 448H96v-48h192zm64-128a48.05 48.05 0 01-48 48H80a48.05 48.05 0 01-48-48V160a48.05 48.05 0 0148-48h224a48.05 48.05 0 0148 48zm-72-192H104a8 8 0 00-8 8v32a8 8 0 008 8h176a8 8 0 008-8v-32a8 8 0 00-8-8zm0 72h-32a8 8 0 00-8 8v32a8 8 0 008 8h32a8 8 0 008-8v-32a8 8 0 00-8-8z" />
  </svg>
);

SvgWatchCalculator.displayName = "SvgWatchCalculator";
SvgWatchCalculator.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgWatchCalculator;

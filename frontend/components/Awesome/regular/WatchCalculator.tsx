import * as React from "react";

const SvgWatchCalculator = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M128 232H96a8 8 0 00-8 8v32a8 8 0 008 8h32a8 8 0 008-8v-32a8 8 0 00-8-8zm80 72h-32a8 8 0 00-8 8v32a8 8 0 008 8h32a8 8 0 008-8v-32a8 8 0 00-8-8zm-80 0H96a8 8 0 00-8 8v32a8 8 0 008 8h32a8 8 0 008-8v-32a8 8 0 00-8-8zm160 0h-32a8 8 0 00-8 8v32a8 8 0 008 8h32a8 8 0 008-8v-32a8 8 0 00-8-8zm-80-72h-32a8 8 0 00-8 8v32a8 8 0 008 8h32a8 8 0 008-8v-32a8 8 0 00-8-8zm80-72H96a8 8 0 00-8 8v32a8 8 0 008 8h192a8 8 0 008-8v-32a8 8 0 00-8-8zm32-78.39V32a32 32 0 00-32-32H96a32 32 0 00-32 32v49.61A80 80 0 000 160v192a80 80 0 0064 78.39V480a32 32 0 0032 32h192a32 32 0 0032-32v-49.61A80 80 0 00384 352V160a80 80 0 00-64-78.39zM112 48h160v32H112zm160 416H112v-32h160zm64-112a32.06 32.06 0 01-32 32H80a32.06 32.06 0 01-32-32V160a32.06 32.06 0 0132-32h224a32.06 32.06 0 0132 32zm-48-120h-32a8 8 0 00-8 8v32a8 8 0 008 8h32a8 8 0 008-8v-32a8 8 0 00-8-8z" />
  </svg>
);

SvgWatchCalculator.displayName = "SvgWatchCalculator";
SvgWatchCalculator.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgWatchCalculator;

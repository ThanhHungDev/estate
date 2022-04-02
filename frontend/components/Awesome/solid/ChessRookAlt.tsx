import * as React from "react";

const SvgChessRookAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 320 512" {...props}>
    <path d="M311.16 459.58L288 448v-16a16 16 0 00-16-16H48a16 16 0 00-16 16v16L8.85 459.58A16 16 0 000 473.89V496a16 16 0 0016 16h288a16 16 0 0016-16v-22.11a16 16 0 00-8.84-14.31zM71.81 210.32L57.33 384h205.34l-14.48-173.7 30.62-31.11a32 32 0 009.19-22.45V72a8 8 0 00-8-8h-35.18a8 8 0 00-8 8v40h-32.94V72a8 8 0 00-8-8h-71.75a8 8 0 00-8 8v40H83.19V72a8 8 0 00-8-8H40a8 8 0 00-8 8v84.82a32 32 0 009.21 22.47zm64.6 21.27a23.59 23.59 0 0147.18 0v47.18h-47.18z" />
  </svg>
);

SvgChessRookAlt.displayName = "SvgChessRookAlt";
SvgChessRookAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgChessRookAlt;

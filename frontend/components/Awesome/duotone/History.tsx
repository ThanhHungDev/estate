import * as React from "react";

const SvgHistory = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M141.68 400.23a184 184 0 10-11.75-278.3l50.76 50.76c10.08 10.08 2.94 27.31-11.32 27.31H24a16 16 0 01-16-16V38.63c0-14.26 17.23-21.4 27.31-11.32l49.38 49.38A247.14 247.14 0 01256 8c136.81 0 247.75 110.78 248 247.53S392.82 503.9 256.18 504a247 247 0 01-155.82-54.91 24 24 0 01-1.84-35.61l11.27-11.27a24 24 0 0131.89-1.98z"
      opacity={0.4}
    />
    <path
      d="M288 152v104.35L328.7 288a24 24 0 014.21 33.68l-9.82 12.62a24 24 0 01-33.68 4.21L224 287.65V152a24 24 0 0124-24h16a24 24 0 0124 24z"
      className="history_svg__fa-primary"
    />
  </svg>
);

SvgHistory.displayName = "SvgHistory";
SvgHistory.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHistory;

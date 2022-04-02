import * as React from "react";

const SvgBurn = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path
      d="M192 0C79.7 101.3 0 220.9 0 300.5 0 425 79 512 192 512s192-87 192-211.5c0-79.9-80.2-199.6-192-300.5zm83 415.6c-21.15 20.9-50.64 32.4-83 32.4s-61.87-11.5-83-32.4-33-50.31-33-82.55c0-16.3 5.1-35.18 15.17-56.11 15-31.13 41-67 77.24-106.56L192 144.65l23.59 25.73c36.28 39.57 62.27 75.43 77.24 106.56C302.9 297.87 308 316.75 308 333.05c0 32.24-11.71 61.56-33 82.55z"
      opacity={0.4}
    />
    <path
      d="M276 333.05c0 48.83-34.56 82.95-84 82.95s-84-34.12-84-82.95c0-11.81 4-53.81 84-141 80 87.19 84 129.19 84 141z"
      className="burn_svg__fa-primary"
    />
  </svg>
);

SvgBurn.displayName = "SvgBurn";
SvgBurn.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBurn;

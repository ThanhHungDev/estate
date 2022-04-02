import * as React from "react";

const SvgChessClock = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M519.48 243a12 12 0 00-17 0l-50.9 50.89a12 12 0 000 17l5.66 5.66a12 12 0 0017 0l50.9-50.9a12 12 0 000-17zm-339.19-18.86h-8a12 12 0 00-12 12v72a12 12 0 0012 12h8a12 12 0 0012-12v-72a12 12 0 00-12-12zM240.06 32h-128a16 16 0 00-16 16v15.94a16 16 0 0016 16h40.19V128h48V79.94h39.81a16 16 0 0016-16V48a16 16 0 00-16-16zM528 96H400a16 16 0 00-16 16v16h160v-16a16 16 0 00-16-16z"
      opacity={0.4}
    />
    <path
      d="M600 128H40a40 40 0 00-40 40v272a40 40 0 0040 40h560a40 40 0 0040-40V168a40 40 0 00-40-40zM176.29 416.06a112 112 0 11112-111.95 111.95 111.95 0 01-112 111.95zm288 0a112 112 0 11112-111.95 111.95 111.95 0 01-112 111.95z"
      className="chess-clock_svg__fa-primary"
    />
  </svg>
);

SvgChessClock.displayName = "SvgChessClock";
SvgChessClock.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgChessClock;

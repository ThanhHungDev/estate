import * as React from "react";

const SvgChessClock = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M519.38 243a12 12 0 00-17 0l-50.89 50.89a12 12 0 000 17l5.65 5.66a12 12 0 0017 0L525 265.59a12 12 0 000-17zm80.52-115h-56v-16a16 16 0 00-16-16h-128a16 16 0 00-16 16v16H200.15V79.94H240a16 16 0 0016-16V48a16 16 0 00-16-16H112a16 16 0 00-16 16v15.94a16 16 0 0016 16h40.18V128H39.9a40 40 0 00-40 40v272a40 40 0 0040 40h560a40 40 0 0040-40V168a40 40 0 00-40-40zM176.2 416.06a112 112 0 11112-111.95 111.95 111.95 0 01-112 111.95zm288 0a112 112 0 11112-111.95 111.95 111.95 0 01-112 111.95zm-284-191.92h-8a12 12 0 00-12 12v72a12 12 0 0012 12h8a12 12 0 0012-12v-72a12 12 0 00-12-12z" />
  </svg>
);

SvgChessClock.displayName = "SvgChessClock";
SvgChessClock.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgChessClock;

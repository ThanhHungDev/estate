import * as React from "react";

const SvgChessClock = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M448.22 416.06a112 112 0 10-112-111.95 112 112 0 00112 111.95zm-12.67-122.19L486.46 243a12 12 0 0117 0l5.66 5.65a12 12 0 010 17l-50.91 50.9a12 12 0 01-17 0l-5.65-5.66a12 12 0 01-.01-17.02zM600 96h-55.79V80a16 16 0 00-16-16h-128a16 16 0 00-16 16v16H200.08V48h40a16 16 0 0016-16V16a16 16 0 00-16-16H112a16 16 0 00-16 16v16a16 16 0 0016 16h40v48H40a40 40 0 00-40 40v336a40 40 0 0040 40h560a40 40 0 0040-40V136a40 40 0 00-40-40zm-8 368H48V144h544zm-399.88-48.09a112 112 0 10-112-112 112 112 0 00112 112zm-16-179.91a12 12 0 0112-12h8a12 12 0 0112 12v72a12 12 0 01-12 12h-8a12 12 0 01-12-12z" />
  </svg>
);

SvgChessClock.displayName = "SvgChessClock";
SvgChessClock.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgChessClock;

import * as React from "react";

const SvgWaveTriangle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M464 480h-.31a24 24 0 01-19.16-10L175.5 96.38l-134 185.29a16 16 0 01-22.42 3.08l-12.75-9.67a16 16 0 01-3.08-22.42L156.88 41.5A24 24 0 01176 32h.31a24 24 0 0119.16 10l269 373.64 134-185.29a16 16 0 0122.42-3.08l12.75 9.67a16 16 0 013.08 22.42L483.13 470.5A24 24 0 01464 480z" />
  </svg>
);

SvgWaveTriangle.displayName = "SvgWaveTriangle";
SvgWaveTriangle.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgWaveTriangle;

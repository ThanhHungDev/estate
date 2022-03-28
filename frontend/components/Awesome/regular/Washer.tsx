import * as React from "react";

const SvgWasher = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 446 512" {...props}>
    <path d="M383 0H63A64 64 0 00-1 64v416a32 32 0 0032 32h384a32 32 0 0032-32V64a64 64 0 00-64-64zm16 464H47V64a16 16 0 0116-16h320a16 16 0 0116 16zM127 104a24 24 0 10-24 24 24 24 0 0024-24zm56 24a24 24 0 10-24-24 24 24 0 0024 24zm40 32a136 136 0 10136 136 136 136 0 00-136-136zm0 226.67A90.78 90.78 0 01132.33 296c0-2.89.59-5.62.86-8.44a45.71 45.71 0 0019.92 4.66 48.93 48.93 0 0035.07-14.79 48.38 48.38 0 0069.64 0 48.93 48.93 0 0035.07 14.79 45.71 45.71 0 0019.92-4.66c.27 2.82.86 5.55.86 8.44A90.78 90.78 0 01223 386.67z" />
  </svg>
);

SvgWasher.displayName = "SvgWasher";
SvgWasher.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgWasher;

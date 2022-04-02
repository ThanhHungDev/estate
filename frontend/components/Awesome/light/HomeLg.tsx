import * as React from "react";

const SvgHomeLg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M573.48 219.91L512 170.42V72a8 8 0 00-8-8h-16a8 8 0 00-8 8v72.6L310.6 8a35.85 35.85 0 00-45.19 0L2.53 219.91a6.71 6.71 0 00-1 9.5l14.2 17.5a6.82 6.82 0 009.6 1L64 216.72V496a16 16 0 0016 16h416a16 16 0 0016-16V216.82l38.8 31.29a6.83 6.83 0 009.6-1l14.19-17.5a7.14 7.14 0 00-1.11-9.7zM336 480h-96V320h96zm144 0H368V304a16 16 0 00-16-16H224a16 16 0 00-16 16v176H96V190.92l187.71-151.4a6.63 6.63 0 018.4 0L480 191z" />
  </svg>
);

SvgHomeLg.displayName = "SvgHomeLg";
SvgHomeLg.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHomeLg;

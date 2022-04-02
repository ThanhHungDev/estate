import * as React from "react";

const SvgAirConditioner = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M544 0H32A32 32 0 000 32v160a32 32 0 0032 32h512a32 32 0 0032-32V32a32 32 0 00-32-32zm0 192H32V32h512zM72 160h432a8 8 0 008-8v-16a8 8 0 00-8-8H72a8 8 0 00-8 8v16a8 8 0 008 8zm152 264a56 56 0 01-56 56h-16a56.09 56.09 0 01-54.79-67.76c5.36-26.18 29.68-44.24 56.4-44.24H168a8 8 0 008-8v-16a8 8 0 00-8-8h-16a88.09 88.09 0 00-87.57 96.78C68.88 478.5 110 512 155.91 512H168a88 88 0 0088-88V256h-32zm196.1-120H408a8 8 0 00-8 8v16a8 8 0 008 8h16a56.09 56.09 0 0154.79 67.76c-5.36 26.18-29.68 44.24-56.4 44.24H408a56 56 0 01-56-56V256h-32v136a88 88 0 0088 88h16a88.09 88.09 0 0087.57-96.78C507.12 337.5 466 304 420.1 304z" />
  </svg>
);

SvgAirConditioner.displayName = "SvgAirConditioner";
SvgAirConditioner.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgAirConditioner;

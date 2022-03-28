import * as React from "react";

const SvgBlindsRaised = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M512 32V16a16 16 0 00-16-16H16A16 16 0 000 16v16a15.94 15.94 0 0010.28 14.85L.07 158.55a16 16 0 009.65 16.09L.08 270.41a16 16 0 0016 17.59H120v134.66a48 48 0 1048 0V48h285.62l7.32 80H200v48h254.17l6.45 64H200v48h295.89a16 16 0 0016-17.59l-9.64-95.77a16 16 0 009.65-16.09l-10.18-111.7A15.94 15.94 0 00512 32zM51.38 240l6.45-64H120v64zM120 128H51.06l7.32-80H120z" />
  </svg>
);

SvgBlindsRaised.displayName = "SvgBlindsRaised";
SvgBlindsRaised.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBlindsRaised;

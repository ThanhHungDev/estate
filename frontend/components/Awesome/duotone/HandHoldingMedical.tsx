import * as React from "react";

const SvgHandHoldingMedical = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M559.73 392.21l-135 99.52A104.8 104.8 0 01363 512H16a16.11 16.11 0 01-16-16v-96a16.11 16.11 0 0116-16h55.37l46.5-37.74A117.7 117.7 0 01192 320h160a32.07 32.07 0 0131.62 37.38C381 373.15 366.22 384 350.23 384H272a16 16 0 000 32h120.59l119.67-88.18a40 40 0 1147.47 64.37z"
      opacity={0.4}
    />
    <path
      d="M400 96v64a16 16 0 01-16 16h-64v64a16 16 0 01-16 16h-64a16 16 0 01-16-16v-64h-64a16 16 0 01-16-16V96a16 16 0 0116-16h64V16a16 16 0 0116-16h64a16 16 0 0116 16v64h64a16 16 0 0116 16z"
      className="hand-holding-medical_svg__fa-primary"
    />
  </svg>
);

SvgHandHoldingMedical.displayName = "SvgHandHoldingMedical";
SvgHandHoldingMedical.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHandHoldingMedical;

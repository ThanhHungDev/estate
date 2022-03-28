import * as React from "react";

const SvgStepForward = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M304 219.29V48a16 16 0 0116-16h48a16 16 0 0116 16v416a16 16 0 01-16 16h-48a16 16 0 01-16-16V219.3z"
      opacity={0.4}
    />
    <path
      d="M64 448V64c0-27.4 31.9-41.7 52.5-24.6L304 213.66v84.69L116.5 472.59C95.9 489.69 64 475.39 64 448z"
      className="step-forward_svg__fa-primary"
    />
  </svg>
);

SvgStepForward.displayName = "SvgStepForward";
SvgStepForward.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgStepForward;

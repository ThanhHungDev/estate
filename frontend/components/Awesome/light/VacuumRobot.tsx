import * as React from "react";

const SvgVacuumRobot = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M431.36 80.64a248 248 0 00-350.72 0c-96.85 96.85-96.85 253.87 0 350.72a248 248 0 00350.72 0c96.85-96.85 96.85-253.87 0-350.72zm-22.62 328.09a216 216 0 01-305.48 0c-84.21-84.21-84.21-221.25 0-305.47a216 216 0 01305.48 0c84.26 84.22 84.26 221.26 0 305.47zM140.12 304a16 16 0 00-22.63 22.63l67.88 67.88A16 16 0 00208 371.88zm22.62-67.88a16 16 0 00-22.62 22.62l113.13 113.14a16 16 0 0022.63-22.63zm67.89-22.63A16 16 0 00208 236.12L275.88 304a16 16 0 0022.63-22.63zm149.82-81.94c-68.62-68.63-180.28-68.63-248.9 0a16 16 0 0022.62 22.62c56.16-56.15 147.5-56.15 203.66 0s56.14 147.5 0 203.66a16 16 0 1022.62 22.62c68.63-68.62 68.63-180.28 0-248.9z" />
  </svg>
);

SvgVacuumRobot.displayName = "SvgVacuumRobot";
SvgVacuumRobot.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgVacuumRobot;

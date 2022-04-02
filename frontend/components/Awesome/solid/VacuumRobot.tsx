import * as React from "react";

const SvgVacuumRobot = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M431.36 80.64c-96.85-96.85-253.87-96.85-350.72 0s-96.85 253.87 0 350.72 253.87 96.85 350.72 0 96.85-253.87 0-350.72zM199.43 403.08a16 16 0 01-22.63 0l-67.88-67.88a16 16 0 0122.63-22.63l67.88 67.88a16 16 0 010 22.63zm67.88-22.63a16 16 0 01-22.62 0L131.55 267.31a16 16 0 0122.63-22.62l113.13 113.13a16 16 0 010 22.63zm22.63-67.88a16 16 0 01-22.63 0l-67.88-67.88a16 16 0 0122.63-22.63l67.88 67.88a16 16 0 010 22.63zm90.51 67.88a16 16 0 01-22.62-22.62c56.14-56.16 56.14-147.5 0-203.66s-147.5-56.15-203.66 0a16 16 0 01-22.62-22.62c68.62-68.63 180.28-68.63 248.9 0s68.63 180.28 0 248.9z" />
  </svg>
);

SvgVacuumRobot.displayName = "SvgVacuumRobot";
SvgVacuumRobot.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgVacuumRobot;

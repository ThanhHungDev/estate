import * as React from "react";

const SvgVacuumRobot = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M431.36 80.64a248 248 0 00-350.72 0c-96.85 96.85-96.85 253.87 0 350.72a248 248 0 00350.72 0c96.85-96.85 96.85-253.87 0-350.72zm-33.94 316.78a200 200 0 11-282.84-282.84 200 200 0 11282.84 282.84zM369 143c-62.34-62.25-163.66-62.25-226 0a24 24 0 0034 34 111.77 111.77 0 11158 158 24 24 0 1034 34 159.72 159.72 0 000-226zM139.55 304.57a16 16 0 00-22.63 22.63l67.88 67.88a16 16 0 0022.63-22.63zm90.51-90.51a16 16 0 00-22.63 22.63l67.88 67.88a16 16 0 0022.63-22.63zm-67.88 22.63a16 16 0 00-22.63 22.62l113.14 113.14a16 16 0 0022.62-22.63z" />
  </svg>
);

SvgVacuumRobot.displayName = "SvgVacuumRobot";
SvgVacuumRobot.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgVacuumRobot;

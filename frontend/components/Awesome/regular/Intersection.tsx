import * as React from "react";

const SvgIntersection = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 320 512" {...props}>
    <path d="M48 432V227.22c0-53.45 36.12-102.08 88.48-112.81C208.46 99.67 272 154.56 272 224v208c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16V231.14c0-83.51-60.89-158.24-144.01-166.35C80.62 55.47 0 130.5 0 224v208c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16z" />
  </svg>
);

SvgIntersection.displayName = "SvgIntersection";
SvgIntersection.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgIntersection;
import * as React from "react";

const SvgRingsWedding = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M371.94 163.7a222.3 222.3 0 0122.43 59C435.52 244.05 464 286.55 464 336a128 128 0 01-256 0c0-54.66 34.52-101.17 82.85-119.44A126.49 126.49 0 01304 272c0 37.37-16.38 70.73-42 94.15a80.3 80.3 0 0031 37 175.71 175.71 0 00-46.33-292.3L288 44.66 232.53 0H119.47L64 44.66l41.29 66.23A176 176 0 00176 448a164 164 0 0022.86-1.82A176 176 0 10371.94 163.7zM128 55.34l8.53-7.34h78.94l8.53 7.34-25.47 42.26a160 160 0 00-45.06 0zM48 272a128.14 128.14 0 01128-128c33 0 62.87 12.91 85.6 33.51-59.88 28-101.6 88-101.6 158.49a175.18 175.18 0 0012 63.6C103.33 397.45 48 341.22 48 272z" />
  </svg>
);

SvgRingsWedding.displayName = "SvgRingsWedding";
SvgRingsWedding.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgRingsWedding;

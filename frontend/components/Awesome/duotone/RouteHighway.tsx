import * as React from "react";

const SvgRouteHighway = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M428.4 269.21c37.94 56.52 18.55 139.43-38.81 166L224 512 58.41 435.25c-57.36-26.6-76.75-109.51-38.81-166A93.67 93.67 0 0035 224h378a93.55 93.55 0 0015.4 45.21z"
      opacity={0.4}
    />
    <path
      d="M6.6 113.82a24.73 24.73 0 011.87-25.13l41.18-58.37c5-7.09 15.67-13.13 27.49-8.61a141.61 141.61 0 0050.25 8.89c29.51 0 59.82-8.47 83.17-26.11a22.36 22.36 0 0126.88 0c23.35 17.64 53.65 26.11 83.16 26.11a141.7 141.7 0 0050.26-8.89c11.73-4.49 22.43 1.43 27.49 8.61l41.18 58.36a24.73 24.73 0 011.87 25.13c-12.16 25-22.84 51.88-27 78.19H33.58c-4.15-26.31-14.82-53.22-26.98-78.18z"
      className="route-highway_svg__fa-primary"
    />
  </svg>
);

SvgRouteHighway.displayName = "SvgRouteHighway";
SvgRouteHighway.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgRouteHighway;

import * as React from "react";

const SvgIntersection = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M166.74 33.62C69.96 46.04 0 133.11 0 230.68V464c0 8.84 7.16 16 16 16h64c8.84 0 16-7.16 16-16V224c0-59.2 53.85-106.04 115.13-94.14 45.58 8.85 76.87 51.5 76.87 97.93V464c0 8.84 7.16 16 16 16h64c8.84 0 16-7.16 16-16V224c0-114.18-100.17-205.4-217.26-190.38z" />
  </svg>
);

SvgIntersection.displayName = "SvgIntersection";
SvgIntersection.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgIntersection;

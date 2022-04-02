import * as React from "react";

const SvgMonument = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M368 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h352c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zm-78.86-347.26a31.97 31.97 0 00-9.21-19.44L203.31 4.69c-6.25-6.25-16.38-6.25-22.63 0l-76.6 76.61a31.97 31.97 0 00-9.21 19.44L64 416h256l-30.86-315.26zM240 307.2c0 6.4-6.4 12.8-12.8 12.8h-70.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h70.4c6.4 0 12.8 6.4 12.8 12.8v38.4z" />
  </svg>
);

SvgMonument.displayName = "SvgMonument";
SvgMonument.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMonument;

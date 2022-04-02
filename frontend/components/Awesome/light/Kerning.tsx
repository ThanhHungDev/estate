import * as React from "react";

const SvgKerning = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M416.54 0h-17A8 8 0 00392 5.32l-176.28 496a8 8 0 007.55 10.68h17a8 8 0 007.54-5.32l176.29-496A8 8 0 00416.54 0zm-131 96h-17.02a8 8 0 00-7.5 5.19L160 371 59 101.19A8 8 0 0051.49 96H34.43a8 8 0 00-7.49 10.8l113.8 304a8 8 0 007.5 5.2h23.53a8 8 0 007.49-5.2l113.81-304a8 8 0 00-7.5-10.8zm327.52 309.2l-113.8-304a8 8 0 00-7.49-5.2h-23.53a8 8 0 00-7.5 5.2l-113.8 304a8 8 0 007.49 10.8h17.06a8 8 0 007.49-5.2L413 320h134l34 90.8a8 8 0 007.5 5.2h17.05a8 8 0 007.51-10.8zM425 288l55-147 55 147z" />
  </svg>
);

SvgKerning.displayName = "SvgKerning";
SvgKerning.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgKerning;

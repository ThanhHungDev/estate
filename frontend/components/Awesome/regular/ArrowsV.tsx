import * as React from "react";

const SvgArrowsV = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 320 512" {...props}>
    <path d="M273.1 347.4c-4.8-4.8-12.5-4.7-17.1.2l-70 73.2V91.2l70 73.2c4.7 4.8 12.4 4.9 17.1.2l19.6-19.6c4.7-4.7 4.7-12.3 0-17L168.5 3.5c-4.7-4.7-12.3-4.7-17 0L27.2 128c-4.7 4.7-4.7 12.3 0 17l19.6 19.6c4.8 4.8 12.5 4.7 17.1-.2l70-73.2v329.6l-70-73.2c-4.7-4.8-12.4-4.9-17.1-.2L27.2 367c-4.7 4.7-4.7 12.3 0 17l124.3 124.5c4.7 4.7 12.3 4.7 17 0L292.8 384c4.7-4.7 4.7-12.3 0-17l-19.7-19.6z" />
  </svg>
);

SvgArrowsV.displayName = "SvgArrowsV";
SvgArrowsV.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgArrowsV;

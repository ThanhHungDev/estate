import * as React from "react";

const SvgCameraHome = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M224 96h-.05a112 112 0 10.05 0zm0 80a32 32 0 00-32 32 16 16 0 01-32 0 64.06 64.06 0 0164-64 16 16 0 010 32z"
      opacity={0.4}
    />
    <path
      d="M384 0H64A64 64 0 000 64v288a64 64 0 0064 64h72.71l-60.18 34.83c-6.9 4.33-12.5 14.45-12.5 22.6v11.9A26.68 26.68 0 0090.7 512h266.67A26.68 26.68 0 00384 485.33v-11.88c0-8.17-5.65-18.3-12.58-22.62L311.28 416H384a64 64 0 0064-64V64a64 64 0 00-64-64zM224 352h-.05a144 144 0 11.05 0z"
      className="camera-home_svg__fa-primary"
    />
  </svg>
);

SvgCameraHome.displayName = "SvgCameraHome";
SvgCameraHome.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCameraHome;

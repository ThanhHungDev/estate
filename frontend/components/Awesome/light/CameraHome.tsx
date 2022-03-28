import * as React from "react";

const SvgCameraHome = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M208 128a64.06 64.06 0 00-64 64 16 16 0 0032 0 32 32 0 0132-32 16 16 0 000-32zm15.94-64a144 144 0 000 288h.06a144 144 0 00-.05-288zm0 256a112 112 0 010-224h.06a112 112 0 01-.05 224zM384 0H64A64 64 0 000 64v288a64 64 0 0064 64h72.71l-60.18 34.83c-6.9 4.33-12.5 14.45-12.5 22.6v11.9A26.68 26.68 0 0090.7 512h266.67A26.68 26.68 0 00384 485.33v-11.88c0-8.17-5.65-18.3-12.58-22.62L311.28 416H384a64 64 0 0064-64V64a64 64 0 00-64-64zm-32 476.54V480H96v-3.48l56.71-32.82 47.88-27.7h46.81l47.85 27.7zM416 352a32 32 0 01-32 32H64a32 32 0 01-32-32V64a32 32 0 0132-32h320a32 32 0 0132 32z" />
  </svg>
);

SvgCameraHome.displayName = "SvgCameraHome";
SvgCameraHome.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCameraHome;

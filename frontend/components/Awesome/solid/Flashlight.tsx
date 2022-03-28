import * as React from "react";

const SvgFlashlight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M384 160H32a32 32 0 00-32 32v128a32 32 0 0032 32h352l16.12 10.75c43.14 28.76 92.62 45.67 143.88 50.89V98.36c-51.26 5.22-100.74 22.13-143.88 50.89zm-96 128h-32a32 32 0 010-64h32a32 32 0 010 64zM608 96h-32v320h32a32 32 0 0032-32V128a32 32 0 00-32-32z" />
  </svg>
);

SvgFlashlight.displayName = "SvgFlashlight";
SvgFlashlight.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFlashlight;

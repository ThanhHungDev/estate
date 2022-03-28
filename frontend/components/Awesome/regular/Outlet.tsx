import * as React from "react";

const SvgOutlet = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M448 0H64A64 64 0 000 64v384a64 64 0 0064 64h384a64 64 0 0064-64V64a64 64 0 00-64-64zm16 448a16 16 0 01-16 16H64a16 16 0 01-16-16V64a16 16 0 0116-16h384a16 16 0 0116 16zM353.85 96h-195.7a22.86 22.86 0 00-16.41 6.7C103.71 141.71 80 195.9 80 256s23.71 114.28 61.74 153.29a22.87 22.87 0 0016.41 6.71h195.7a22.87 22.87 0 0016.41-6.71c38-39 61.74-93.19 61.74-153.29s-23.71-114.29-61.74-153.3a22.86 22.86 0 00-16.41-6.7zM208 272a16 16 0 01-16 16h-16a16 16 0 01-16-16v-80a16 16 0 0116-16h16a16 16 0 0116 16zm80 80h-64v-16a32 32 0 0164 0zm64-80a16 16 0 01-16 16h-16a16 16 0 01-16-16v-80a16 16 0 0116-16h16a16 16 0 0116 16z" />
  </svg>
);

SvgOutlet.displayName = "SvgOutlet";
SvgOutlet.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgOutlet;

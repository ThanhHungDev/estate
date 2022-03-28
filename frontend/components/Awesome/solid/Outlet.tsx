import * as React from "react";

const SvgOutlet = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M448 0H64A64 64 0 000 64v384a64 64 0 0064 64h384a64 64 0 0064-64V64a64 64 0 00-64-64zm-61.74 409.29a22.87 22.87 0 01-16.41 6.71h-227.7a22.87 22.87 0 01-16.41-6.71C87.71 370.28 64 316.1 64 256s23.71-114.28 61.74-153.3a22.86 22.86 0 0116.41-6.7h227.7a22.86 22.86 0 0116.41 6.7c38 39 61.74 93.2 61.74 153.3s-23.71 114.28-61.74 153.29zM256 304a32 32 0 00-32 32v16h64v-16a32 32 0 00-32-32zm-64-128h-16a16 16 0 00-16 16v80a16 16 0 0016 16h16a16 16 0 0016-16v-80a16 16 0 00-16-16zm144 0h-16a16 16 0 00-16 16v80a16 16 0 0016 16h16a16 16 0 0016-16v-80a16 16 0 00-16-16z" />
  </svg>
);

SvgOutlet.displayName = "SvgOutlet";
SvgOutlet.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgOutlet;

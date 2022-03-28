import * as React from "react";

const SvgCameraHome = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M224 160a64.12 64.12 0 00-64 64 16 16 0 0032 0 32 32 0 0132-32 16 16 0 000-32zm0-80c-79.41 0-144 64.59-144 144s64.59 144 144 144 144-64.59 144-144S303.41 80 224 80zm0 240a96 96 0 1196-96 96 96 0 01-96 96zM384 0H64A64 64 0 000 64v320a64 64 0 0064 64h17.42l-4.89 2.83c-6.9 4.33-12.5 14.45-12.5 22.6v11.9A26.68 26.68 0 0090.7 512h266.67A26.68 26.68 0 00384 485.33v-11.88c0-8.17-5.65-18.3-12.58-22.62l-4.85-2.83H384a64 64 0 0064-64V64a64 64 0 00-64-64zm16 384a16 16 0 01-16 16H64a16 16 0 01-16-16V64a16 16 0 0116-16h320a16 16 0 0116 16z" />
  </svg>
);

SvgCameraHome.displayName = "SvgCameraHome";
SvgCameraHome.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCameraHome;

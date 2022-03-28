import * as React from "react";

const SvgPlanetMoon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M224 64C100.287 64 0 164.285 0 288c0 123.713 100.287 224 224 224s224-100.287 224-224c0-123.715-100.287-224-224-224zM55.04 202.861A168.372 168.372 0 01208 104c16.43.232 24 9.592 24 20.621a55.68 55.68 0 01-8.795 30.264L175.29 210.15c-14.033 16.186-14.373 43.1 1.295 57.707A44.997 44.997 0 00207.454 280H272a24.026 24.026 0 0124 24v16.89a56.298 56.298 0 01-5.914 25.05l-40.322 64.648a20.736 20.736 0 01-15.063 11.14 147.92 147.92 0 01-10.783 1.415 8.107 8.107 0 01-7.92-8.075c-.006-70.99-.012-44.607.045-55.068H208a24.027 24.027 0 01-24-24v-35.314l-56.967-56.97A40.008 40.008 0 0098.746 232l-25.025-.002c-15.514 0-24.61-16.059-18.682-29.137zM224 480c-105.87 0-192-86.13-192-192a191.853 191.853 0 014.285-40.107 51.997 51.997 0 0037.436 16.105l25.025.002a7.95 7.95 0 015.658 2.344L152 313.94V336a56.078 56.078 0 0031.998 50.592c-.002 1.703-.002.42 0 28.478a40.048 40.048 0 0039.92 40.073c4.89 0 14.477-1.586 16.082-1.856a52.835 52.835 0 0038.383-28.387l40.326-64.648A88.495 88.495 0 00328 320.891V304a56.063 56.063 0 00-56-56h-64.547a13.223 13.223 0 01-9.412-3.9 8.026 8.026 0 01-.385-10.897l49.727-57.355.994-1.147.842-1.262A87.735 87.735 0 00264 124.621a52.59 52.59 0 00-6.742-25.539C347.303 114.9 416 193.492 416 288c0 105.87-86.13 192-192 192zM512 0a64 64 0 1064 64 64 64 0 00-64-64zm0 96a32 32 0 1132-32 32.037 32.037 0 01-32 32z" />
  </svg>
);

SvgPlanetMoon.displayName = "SvgPlanetMoon";
SvgPlanetMoon.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPlanetMoon;
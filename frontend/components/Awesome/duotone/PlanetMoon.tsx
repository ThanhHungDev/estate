import * as React from "react";

const SvgPlanetMoon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M448 288c0 123.713-100.29 224-224 224S0 411.713 0 288a223.139 223.139 0 0118.203-88.438C34.445 228.561 59.723 256 89.72 255.999l25.027.002a32.01 32.01 0 0122.629 9.371L192 320v32a32.002 32.002 0 0032 32c-.008 0-.004 39.59 0 63.068a16.03 16.03 0 0017.605 15.985q5.256-.563 10.418-1.434a28.687 28.687 0 0020.895-15.453l40.324-80.648A63.998 63.998 0 00320 336.89V320a32 32 0 00-32-32h-64.547a37.322 37.322 0 01-26.383-10.928 32 32 0 01-1.547-43.59l49.727-57.357A64.016 64.016 0 00256 140.621c0-9.418-18.29-47.91-35.977-76.42L224 64c123.71 0 224 100.285 224 224z"
      opacity={0.4}
    />
    <path
      d="M512 0a64 64 0 1064 64 64 64 0 00-64-64zM288 288h-64.547a37.322 37.322 0 01-26.383-10.928 32 32 0 01-1.547-43.59l49.727-57.357A64.016 64.016 0 00256 140.621c0-9.418-18.29-47.91-35.977-76.42a223.92 223.92 0 00-201.82 135.362C34.445 228.56 59.723 256 89.72 255.998l25.027.002a32.01 32.01 0 0122.629 9.371L192 320v32a32.002 32.002 0 0032 32c-.008 0-.004 39.59 0 63.068a16.03 16.03 0 0017.605 15.985q5.256-.563 10.418-1.434a28.687 28.687 0 0020.895-15.453l40.324-80.648A63.998 63.998 0 00320 336.89V320a32 32 0 00-32-32z"
      className="planet-moon_svg__fa-primary"
    />
  </svg>
);

SvgPlanetMoon.displayName = "SvgPlanetMoon";
SvgPlanetMoon.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPlanetMoon;

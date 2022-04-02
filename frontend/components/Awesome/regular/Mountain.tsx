import * as React from "react";

const SvgMountain = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M634.92 462.7l-288-448C341.03 5.54 330.89 0 320 0s-21.03 5.54-26.92 14.7l-288 448a32.001 32.001 0 00-1.17 32.64A32.004 32.004 0 0032 512h576c11.71 0 22.48-6.39 28.09-16.67a31.983 31.983 0 00-1.17-32.63zM61.31 464l131.77-204.98L256 321.94 329.94 248h109.9L578.7 464H61.31zM320 61.59L408.98 200h-98.92L256 254.06l-36.36-36.36L320 61.59z" />
  </svg>
);

SvgMountain.displayName = "SvgMountain";
SvgMountain.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMountain;

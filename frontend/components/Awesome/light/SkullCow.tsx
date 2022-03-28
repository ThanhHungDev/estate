import * as React from "react";

const SvgSkullCow = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M603.26 4.58a16 16 0 00-26.21 17c6.07 16.12 19.6 67.59 2.88 91.7C573.13 123.05 561.4 128 544 128l-73-.18A63.73 63.73 0 00416 96H224a63.71 63.71 0 00-55.12 32H96c-17.35 0-29.08-4.93-35.88-14.7C43.35 89.22 56.49 38.92 63 21.57a16 16 0 00-26.19-17C13.05 27.81 0 60.17 0 95.7 0 166.18 57.43 224 128 224h32v80a64 64 0 0064 64l26.4 118.93A32 32 0 00281.6 512h76.66a32 32 0 0031.23-25L416 368a64 64 0 0064-64v-80h32c70.59 0 128-57.83 128-128.3 0-35.52-13-67.88-36.74-91.12zM160 192h-32c-35.51 0-66.56-19.77-83.19-48.45C55.44 152.38 71.6 160 96 160h64zm288 112a32 32 0 01-32 32h-25.7l-5.58 25.05L358.26 480H281.6l-26.4-118.93-5.56-25.07H224a32 32 0 01-32-32V160a32 32 0 0132-32h192a32 32 0 0132 32zm64-112h-32v-32-.19l64 .19c24.36 0 40.5-7.6 51.11-16.43C578.52 172.23 547.47 192 512 192zm-256 32a32 32 0 1032 32 32 32 0 00-32-32zm128 0a32 32 0 1032 32 32 32 0 00-32-32z" />
  </svg>
);

SvgSkullCow.displayName = "SvgSkullCow";
SvgSkullCow.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSkullCow;

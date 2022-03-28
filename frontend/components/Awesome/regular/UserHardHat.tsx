import * as React from "react";

const SvgUserHardHat = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M224 272a80.13 80.13 0 01-78.38-64h-48c8 63.06 61.17 112 126.39 112s118.44-48.94 126.39-112h-48a80.13 80.13 0 01-78.4 64zm89.6 80c-28.72 0-42.45 16-89.6 16s-60.88-16-89.56-16A134.4 134.4 0 000 486.4 25.6 25.6 0 0025.6 512h396.8a25.6 25.6 0 0025.6-25.6A134.4 134.4 0 00313.6 352zM50.94 464a86.58 86.58 0 0183.5-64c14.44 0 38.28 16 89.56 16 51.47 0 75.1-16 89.6-16a86.55 86.55 0 0183.46 64zM88 176h272a8 8 0 008-8v-32a8 8 0 00-8-8h-8c0-46.41-28.53-85.54-68.79-102.42L256 80V16a16 16 0 00-16-16h-32a16 16 0 00-16 16v64l-27.21-54.42C124.53 42.46 96 81.59 96 128h-8a8 8 0 00-8 8v32a8 8 0 008 8z" />
  </svg>
);

SvgUserHardHat.displayName = "SvgUserHardHat";
SvgUserHardHat.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgUserHardHat;

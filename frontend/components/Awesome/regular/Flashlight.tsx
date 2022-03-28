import * as React from "react";

const SvgFlashlight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M608 96h-32a317 317 0 00-175.89 53.26L384 160H48a48 48 0 00-48 48v96a48 48 0 0048 48h336l16.13 10.75A317.07 317.07 0 00576 416h32a32 32 0 0032-32V128a32 32 0 00-32-32zm-64 269.65a267.55 267.55 0 01-117.24-42.84L398.53 304H48v-96h350.54l28.19-18.8A267.73 267.73 0 01544 146.35zM284 232h-24a24 24 0 000 48h24a24 24 0 000-48z" />
  </svg>
);

SvgFlashlight.displayName = "SvgFlashlight";
SvgFlashlight.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFlashlight;

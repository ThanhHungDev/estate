import * as React from "react";

const SvgLampFloor = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M256 448h-32V255.69h-64V448h-32c-28.42 0-54.95 18.53-63.3 44.16C61.48 502 69.88 512 80.26 512h223.48c10.38 0 18.78-10 15.56-19.84C311 466.53 284.42 448 256 448zm125.38-268.6l-68.57-160A32 32 0 00283.39 0H100.61a32 32 0 00-29.42 19.4l-68.57 160A32 32 0 0032 224h320a32 32 0 0029.38-44.6z" />
  </svg>
);

SvgLampFloor.displayName = "SvgLampFloor";
SvgLampFloor.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgLampFloor;

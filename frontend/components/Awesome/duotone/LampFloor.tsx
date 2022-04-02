import * as React from "react";

const SvgLampFloor = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M224 224v224h-64V224z" opacity={0.4} />
    <path
      d="M256 448H128c-28.42 0-54.95 18.53-63.3 44.16C61.48 502 69.88 512 80.26 512h223.48c10.38 0 18.78-10 15.56-19.84C311 466.53 284.42 448 256 448zm125.38-268.61l-68.58-160A32 32 0 00283.39 0H100.61A32 32 0 0071.2 19.39l-68.58 160A32 32 0 0032 224h320a32 32 0 0029.38-44.61z"
      className="lamp-floor_svg__fa-primary"
    />
  </svg>
);

SvgLampFloor.displayName = "SvgLampFloor";
SvgLampFloor.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgLampFloor;

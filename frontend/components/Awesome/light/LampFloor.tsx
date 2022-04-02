import * as React from "react";

const SvgLampFloor = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M381.38 179.39l-68.57-160A32 32 0 00283.39 0H100.61a32 32 0 00-29.42 19.39l-68.57 160A32 32 0 0032 224h144v192h-32c-35.09 0-68.12 23.22-78.53 55.2a30.16 30.16 0 004.47 27.35A32.63 32.63 0 0096.25 512h191.5a32.63 32.63 0 0026.31-13.45 30.18 30.18 0 004.47-27.36C308.06 439.2 275.06 416 240 416h-32V224h144a32 32 0 0029.38-44.61zM240 448c21.59 0 41.84 13.94 47.75 32H95.91c6.25-19.19 26.47-32 48.09-32zM32 192l68.61-160h182.78L352 192z" />
  </svg>
);

SvgLampFloor.displayName = "SvgLampFloor";
SvgLampFloor.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgLampFloor;

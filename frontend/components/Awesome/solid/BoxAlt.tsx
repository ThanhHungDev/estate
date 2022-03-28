import * as React from "react";

const SvgBoxAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M446.7 160c.4-.5.5-.7.9-1.2L391.3 53.9C386.9 40.8 374.7 32 360.9 32H256l32 128h158.7zM160 160l32-128H87.1c-13.8 0-26 8.8-30.4 21.9L.4 158.8c.4.5.5.7.9 1.2H160zm128 32v80c0 8.8-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16v-80H0v256c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V192H288z" />
  </svg>
);

SvgBoxAlt.displayName = "SvgBoxAlt";
SvgBoxAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBoxAlt;
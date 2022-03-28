import * as React from "react";

const SvgTilde = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M339.54 381.51c-35.52-6.48-66.75-27.68-89.31-55.87l-66.52-83.15C174.33 230.73 160.3 224 145.25 224 118.09 224 96 246.09 96 273.25V321c0 17.67-14.33 32-32 32H32c-17.67 0-32-14.33-32-32v-40.92c0-78.1 58.67-147.33 136.64-151.83 47.6-2.75 92.54 17.39 122.05 54.27l69.59 87c9.39 11.75 23.42 18.48 38.47 18.48 27.16 0 49.25-22.09 49.25-49.25V192c0-17.67 14.33-32 32-32h32c17.67 0 32 14.33 32 32v46.75c0 89-80.45 159.56-172.46 142.76z" />
  </svg>
);

SvgTilde.displayName = "SvgTilde";
SvgTilde.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTilde;

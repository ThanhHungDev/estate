import * as React from "react";

const SvgCompassSlash = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M633.82 458.1l-99.85-77.17C555.47 344.21 568 301.62 568 256 568 119.03 456.97 8 320 8c-68.31 0-130.03 27.72-174.82 72.44L45.47 3.37C38.49-2.05 28.43-.8 23.01 6.18L3.37 31.45C-2.05 38.42-.8 48.47 6.18 53.9l588.36 454.73c6.98 5.43 17.03 4.17 22.46-2.81l19.64-25.27c5.41-6.97 4.16-17.02-2.82-22.45zM446.14 156.05l-53.03 116.01-105.65-81.66 132.48-60.55c16.66-7.6 33.81 9.55 26.2 26.2zM220.05 382.14c-16.65 7.61-33.81-9.55-26.2-26.2l25.7-56.24L80.57 192.29C75.16 212.65 72 233.93 72 256c0 136.97 111.03 248 248 248 44.43 0 86.03-11.83 122.1-32.29L286.77 351.65l-66.72 30.49z" />
  </svg>
);

SvgCompassSlash.displayName = "SvgCompassSlash";
SvgCompassSlash.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCompassSlash;
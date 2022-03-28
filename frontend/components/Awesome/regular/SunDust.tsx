import * as React from "react";

const SvgSunDust = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M160 448c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm320-256c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm-96 96c0-17.7-14.3-32-32-32s-32 14.3-32 32 14.3 32 32 32 32-14.3 32-32zm-144 64c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm80 96c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm0-192c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zM320 448c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm-64-248c15.4 0 29.4 6.3 39.6 16.4l33.9-33.9C310.7 163.7 284.7 152 256 152c-57.3 0-104 46.7-104 104 0 28.7 11.7 54.7 30.5 73.5l33.9-33.9C206.3 285.4 200 271.4 200 256c0-30.9 25.1-56 56-56zM400.8 62.9l-70.9 13.7-40.4-59.9c-15.1-22.3-51.9-22.3-67 0l-40.4 59.9-70.8-13.7C98 60.4 84.5 64.5 75 74.1c-9.5 9.6-13.7 23.1-11.1 36.3l13.7 71-59.8 40.5C6.6 229.5 0 242 0 255.5s6.7 26 17.8 33.5l59.8 40.5-13.7 71c-2.6 13.2 1.6 26.8 11.1 36.3l.1.1 38.3-38.3-.3.1 17.6-91.2-76.8-52 76.8-52-17.6-91.2 91 17.6L256 53l51.9 76.9 91-17.6-.2 1 38.8-38.8c-.2-.2-.2-.4-.4-.5-9.6-9.5-23.3-13.6-36.3-11.1z" />
  </svg>
);

SvgSunDust.displayName = "SvgSunDust";
SvgSunDust.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSunDust;

import * as React from "react";

const SvgBinoculars = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M511.67 388c-3.46-129.77-61.06-150.16-63.58-243.98-.48-17.65-14.28-32.02-31.93-32.02H416V64c0-17.67-14.33-32-32-32h-80c-17.67 0-32 14.33-32 32v48h-32V64c0-17.67-14.33-32-32-32h-80c-17.67 0-32 14.33-32 32v48h-.16c-17.65 0-31.45 14.38-31.93 32.02C61.39 237.84 3.79 258.23.33 388L0 432c0 26.51 21.49 48 48 48h128c26.51 0 48-21.49 48-48V288h64v144c0 26.51 21.49 48 48 48h128c26.51 0 48-21.49 48-48l-.33-44zM320 80h48v32h-48V80zm-176 0h48v32h-48V80zm32 352l-128 .36.31-43.08c1.61-60.24 16.07-91.47 31.39-124.54 13.05-28.17 27.67-59.73 31.4-104.74H176v272zm48-192v-80h64v80h-64zm112 192V160h64.9c3.73 45.01 18.35 76.58 31.4 104.74 15.32 33.07 29.78 64.3 31.37 123.61L464 432H336z" />
  </svg>
);

SvgBinoculars.displayName = "SvgBinoculars";
SvgBinoculars.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBinoculars;

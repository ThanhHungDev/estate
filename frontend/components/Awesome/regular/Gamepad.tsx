import * as React from "react";

const SvgGamepad = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M432 240a32 32 0 1032 32 32 32 0 00-32-32zm-184-24h-48v-48a8 8 0 00-8-8h-32a8 8 0 00-8 8v48h-48a8 8 0 00-8 8v32a8 8 0 008 8h48v48a8 8 0 008 8h32a8 8 0 008-8v-48h48a8 8 0 008-8v-32a8 8 0 00-8-8zm248-40a32 32 0 1032 32 32 32 0 00-32-32zM464 64H176a176 176 0 10120.81 304h46.38A176 176 0 10464 64zm0 304c-55.81 0-85.5-32.69-101.69-48h-84.62c-15.6 14.69-45.5 48-101.69 48a128 128 0 010-256h288a128 128 0 010 256z" />
  </svg>
);

SvgGamepad.displayName = "SvgGamepad";
SvgGamepad.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgGamepad;

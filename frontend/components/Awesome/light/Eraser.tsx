import * as React from "react";

const SvgEraser = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M497.94 273.94a48 48 0 000-67.88l-160-160a48 48 0 00-67.88 0l-256 256a48 48 0 000 67.88l96 96A48 48 0 00144 480h356a12 12 0 0012-12v-8a12 12 0 00-12-12H323.88l174.06-174.06zM292.69 68.69a16 16 0 0122.62 0l160 160a16 16 0 010 22.62L358.63 368 176 185.37zM144 448a15.88 15.88 0 01-11.31-4.69l-96-96a16 16 0 010-22.62L153.37 208 336 390.63l-52.69 52.68A15.88 15.88 0 01272 448z" />
  </svg>
);

SvgEraser.displayName = "SvgEraser";
SvgEraser.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgEraser;

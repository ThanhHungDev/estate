import * as React from "react";

const SvgEraser = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M497.94 273.94a48 48 0 000-67.88l-160-160a48 48 0 00-67.88 0l-256 256a48 48 0 000 67.88l96 96A48 48 0 00144 480h356a12 12 0 0012-12v-24a12 12 0 00-12-12H339.88l158.06-158.06zM304 80l160 160-103 103-160-160zM144 432l-96-96 119-119 160 160-55 55z" />
  </svg>
);

SvgEraser.displayName = "SvgEraser";
SvgEraser.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgEraser;

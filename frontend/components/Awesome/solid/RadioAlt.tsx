import * as React from "react";

const SvgRadioAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M448 128H211.5l288.83-81.21a16 16 0 0011.07-19.74l-4.33-15.38A16 16 0 00487.33.6L64 128a64 64 0 00-64 64v256a64 64 0 0064 64h384a64 64 0 0064-64V192a64 64 0 00-64-64zM224 424a8 8 0 01-8 8H104a8 8 0 01-8-8v-16a8 8 0 018-8h112a8 8 0 018 8zm32-64a8 8 0 01-8 8H72a8 8 0 01-8-8v-16a8 8 0 018-8h176a8 8 0 018 8zm128 88a64 64 0 1164-64 64 64 0 01-64 64zm64-192H64v-64h384z" />
  </svg>
);

SvgRadioAlt.displayName = "SvgRadioAlt";
SvgRadioAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgRadioAlt;

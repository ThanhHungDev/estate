import * as React from "react";

const SvgRadioAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M448 128H184.51L506.3 31a8 8 0 005.36-10L507 5.69a8 8 0 00-10-5.35L73.56 128H64a64 64 0 00-64 64v256a64 64 0 0064 64h384a64 64 0 0064-64V192a64 64 0 00-64-64zm32 320a32 32 0 01-32 32H64a32 32 0 01-32-32V256h448zm0-224H32v-32a32 32 0 0132-32h384a32 32 0 0132 32zM216 384H104a8 8 0 00-8 8v16a8 8 0 008 8h112a8 8 0 008-8v-16a8 8 0 00-8-8zm152 64a80 80 0 10-80-80 80 80 0 0080 80zm0-128a48 48 0 11-48 48 48.05 48.05 0 0148-48zM72 352h176a8 8 0 008-8v-16a8 8 0 00-8-8H72a8 8 0 00-8 8v16a8 8 0 008 8z" />
  </svg>
);

SvgRadioAlt.displayName = "SvgRadioAlt";
SvgRadioAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgRadioAlt;

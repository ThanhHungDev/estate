import * as React from "react";

const SvgRadio = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M216 304H72a8 8 0 00-8 8v16a8 8 0 008 8h144a8 8 0 008-8v-16a8 8 0 00-8-8zm-16 64H88a8 8 0 00-8 8v16a8 8 0 008 8h112a8 8 0 008-8v-16a8 8 0 00-8-8zM88 272h112a8 8 0 008-8v-16a8 8 0 00-8-8H88a8 8 0 00-8 8v16a8 8 0 008 8zm360-144H184.51L506.3 31a8 8 0 005.36-10L507 5.69a8 8 0 00-10-5.35L73.56 128H64a64 64 0 00-64 64v256a64 64 0 0064 64h384a64 64 0 0064-64V192a64 64 0 00-64-64zm32 320a32 32 0 01-32 32H64a32 32 0 01-32-32V192a32 32 0 0132-32h384a32 32 0 0132 32zM352 224a96 96 0 1096 96 96 96 0 00-96-96zm0 160a64 64 0 1164-64 64.07 64.07 0 01-64 64z" />
  </svg>
);

SvgRadio.displayName = "SvgRadio";
SvgRadio.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgRadio;

import * as React from "react";

const SvgCaravanAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M432 96h-64a32 32 0 00-32 32v64a32 32 0 0032 32h64a32 32 0 0032-32v-64a32 32 0 00-32-32zm0 96h-64v-64h64zm200 160h-56V160A160 160 0 00416 0H96A96 96 0 000 96v192a96 96 0 0096 96 96 96 0 00192 0h344a8 8 0 008-8v-16a8 8 0 00-8-8zm-440 96a64 64 0 1164-64 64.07 64.07 0 01-64 64zm352-96H282.12c-13.22-37.2-48.38-64-90.12-64s-76.9 26.8-90.12 64H96a64.07 64.07 0 01-64-64V96a64.07 64.07 0 0164-64h320a128.14 128.14 0 01128 128zM240 96H112a32 32 0 00-32 32v64a32 32 0 0032 32h128a32 32 0 0032-32v-64a32 32 0 00-32-32zm0 96H112v-64h128z" />
  </svg>
);

SvgCaravanAlt.displayName = "SvgCaravanAlt";
SvgCaravanAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCaravanAlt;

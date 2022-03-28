import * as React from "react";

const SvgCaravan = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M624 336h-48V160A160 160 0 00416 0H96A96 96 0 000 96v192a96 96 0 0096 96 96 96 0 00192 0h336a16 16 0 0016-16v-16a16 16 0 00-16-16zm-432 96a48 48 0 1148-48 48.05 48.05 0 01-48 48zm240-224a16 16 0 000 32v96h-64V144h64zm96 128h-48V136a40 40 0 00-40-40h-80a40 40 0 00-40 40v200h-45.31c-16.64-28.57-47.25-48-82.69-48s-66 19.43-82.69 48H96a48.05 48.05 0 01-48-48V96a48.05 48.05 0 0148-48h320a112.12 112.12 0 01112 112zM256 96H128a32 32 0 00-32 32v64a32 32 0 0032 32h128a32 32 0 0032-32v-64a32 32 0 00-32-32z" />
  </svg>
);

SvgCaravan.displayName = "SvgCaravan";
SvgCaravan.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCaravan;

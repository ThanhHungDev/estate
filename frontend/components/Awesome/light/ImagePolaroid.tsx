import * as React from "react";

const SvgImagePolaroid = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M112 192a48 48 0 10-48-48 48 48 0 0048 48zm0-64a16 16 0 11-16 16 16 16 0 0116-16zm304-96H32A32 32 0 000 64v384a32 32 0 0032 32h384a32 32 0 0032-32V64a32 32 0 00-32-32zm0 416H32v-80h384zM85.2 336l52-69.33 40 53.33-12 16zm120 0l76-101.33 76 101.33zm210.8 0h-18.8L294 198.41c-6.06-8.07-19.56-8.07-25.62 0l-71.19 94.91L150 230.41c-6.06-8.07-19.56-8.07-25.62 0L45.18 336H32V64h384z" />
  </svg>
);

SvgImagePolaroid.displayName = "SvgImagePolaroid";
SvgImagePolaroid.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgImagePolaroid;

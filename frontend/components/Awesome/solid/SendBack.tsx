import * as React from "react";

const SvgSendBack = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M256 224V32a32 32 0 00-32-32H32A32 32 0 000 32v192a32 32 0 0032 32h192a32 32 0 0032-32zm-64-32H64V64h128zm416 64H416a32 32 0 00-32 32v192a32 32 0 0032 32h192a32 32 0 0032-32V288a32 32 0 00-32-32zm-32 192H448V320h128zm-96-224v-80a48 48 0 00-48-48H288v128a64.07 64.07 0 01-64 64h-64v80a48 48 0 0048 48h144V288a64.07 64.07 0 0164-64z" />
  </svg>
);

SvgSendBack.displayName = "SvgSendBack";
SvgSendBack.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSendBack;

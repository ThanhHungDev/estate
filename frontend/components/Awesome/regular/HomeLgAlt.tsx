import * as React from "react";

const SvgHomeLgAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M570.24 215.42L323.87 13a56 56 0 00-71.75 0L5.76 215.42a16 16 0 00-2 22.54L14 250.26a16 16 0 0022.53 2L64 229.71V288h-.31v208a16.13 16.13 0 0016.1 16H496a16 16 0 0016-16V229.71l27.5 22.59a16 16 0 0022.53-2l10.26-12.3a16 16 0 00-2.05-22.58zM464 224h-.21v240H352V320a32 32 0 00-32-32h-64a32 32 0 00-32 32v144H111.69V194.48l.31-.25v-4L288 45.65l176 144.62z" />
  </svg>
);

SvgHomeLgAlt.displayName = "SvgHomeLgAlt";
SvgHomeLgAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHomeLgAlt;

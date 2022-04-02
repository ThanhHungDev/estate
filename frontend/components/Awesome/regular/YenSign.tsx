import * as React from "react";

const SvgYenSign = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M347.983 32h-44.065a12.001 12.001 0 00-10.555 6.291l-73.76 133.313c-13.96 29.825-27.286 64.725-27.286 64.725h-1.269s-13.326-34.901-27.287-64.725L90.689 38.328A12 12 0 0080.115 32H36.017c-9.157 0-14.94 9.844-10.481 17.843L119.746 216H68c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h77.18l14.775 26.267V312H68c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h91.955v108c0 6.627 5.373 12 12 12h39.456c6.627 0 12-5.373 12-12V360H316c6.627 0 12-5.373 12-12v-24c0-6.627-5.373-12-12-12h-92.589v-21.733L238.185 264H316c6.627 0 12-5.373 12-12v-24c0-6.627-5.373-12-12-12h-52.367L358.45 49.87c4.485-7.999-1.296-17.87-10.467-17.87z" />
  </svg>
);

SvgYenSign.displayName = "SvgYenSign";
SvgYenSign.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgYenSign;

import * as React from "react";

const SvgFillDrip = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M387.39 288L236.78 438.61a32 32 0 01-45.22 0L74.37 321.4A31.86 31.86 0 0165 298.78 32.59 32.59 0 0166.87 288zM512 320s-64 92.65-64 128a64 64 0 00128 0c0-35.35-64-128-64-128z"
      opacity={0.4}
    />
    <path
      d="M503.63 217L295.94 9.34a32 32 0 00-45.25 0l-81.58 81.58L82.93 4.73a16 16 0 00-22.62 0L37.69 27.35a16 16 0 000 22.62l86.19 86.18-94.76 94.76a96 96 0 000 135.75l117.19 117.19a96 96 0 00135.74 0l221.57-221.57a32 32 0 00.01-45.28zM236.78 438.61a32 32 0 01-45.22 0L74.37 321.4a32 32 0 010-45.24l94.75-94.74 58.6 58.58A32 32 0 00273 194.77l-58.6-58.6 58.92-58.93 162.42 162.41z"
      className="fill-drip_svg__fa-primary"
    />
  </svg>
);

SvgFillDrip.displayName = "SvgFillDrip";
SvgFillDrip.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFillDrip;

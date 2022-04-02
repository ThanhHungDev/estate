import * as React from "react";

const SvgBlind = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path
      d="M380.15 510.84a8 8 0 01-11-2.68L243.83 301.72a31.91 31.91 0 0013-9.48l126 207.61a8 8 0 01-2.68 11z"
      opacity={0.4}
    />
    <path
      d="M142.8 314.34l-32.54 89.48 36.12 88.29a32 32 0 0059.24-24.23zM96 88a44 44 0 10-44-44 44 44 0 0044 44zm154.84 169.13l-120-152A23.91 23.91 0 00112 96H80a23.9 23.9 0 00-18.94 9.24L0 183.77v95.69c0 13.46 11 24.79 24.46 24.54A24 24 0 0048 280v-79.77l16-20.57v140.7L9.93 469.05a32 32 0 0059.91 22.51c.08-.21.16-.42.23-.63L136 309.64v-107.2l-31.41-39.82a4 4 0 016.27-5l102.3 129.22c9.15 11.59 24.37 11.34 33.71 4a24 24 0 004-33.71z"
      className="blind_svg__fa-primary"
    />
  </svg>
);

SvgBlind.displayName = "SvgBlind";
SvgBlind.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBlind;

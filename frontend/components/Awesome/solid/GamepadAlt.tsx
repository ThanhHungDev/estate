import * as React from "react";

const SvgGamepadAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M638.59 368.22l-33.37-211.59c-8.86-50.26-48.4-90.77-100.66-103.13h-.07a803.19 803.19 0 00-369 0C83.17 65.86 43.64 106.36 34.78 156.63L1.41 368.22C-8.9 426.73 38.8 480 101.51 480c49.67 0 93.77-30.07 109.48-74.64l7.52-21.36h203l7.49 21.36C444.72 449.93 488.82 480 538.49 480c62.71 0 110.41-53.27 100.1-111.78zM280 236a12 12 0 01-12 12h-52v52a12 12 0 01-12 12h-24a12 12 0 01-12-12v-52h-52a12 12 0 01-12-12v-24a12 12 0 0112-12h52v-52a12 12 0 0112-12h24a12 12 0 0112 12v52h52a12 12 0 0112 12zm152 76a40 40 0 1140-40 40 40 0 01-40 40zm64-96a40 40 0 1140-40 40 40 0 01-40 40z" />
  </svg>
);

SvgGamepadAlt.displayName = "SvgGamepadAlt";
SvgGamepadAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgGamepadAlt;

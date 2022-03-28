import * as React from "react";

const SvgDiceD4 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M225.28 3.34L1.68 309.48C-1 313.15-.4 318.4 3.03 321.3l223.61 188.81c5.3 4.47 13.17.51 13.17-6.64V8.53C239.8.4 229.99-3.1 225.28 3.34zm285.04 306.14L286.72 3.34C282.01-3.1 272.2.4 272.2 8.53v494.94c0 7.15 7.87 11.11 13.17 6.64l223.6-188.81c3.44-2.9 4.04-8.15 1.35-11.82z" />
  </svg>
);

SvgDiceD4.displayName = "SvgDiceD4";
SvgDiceD4.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgDiceD4;

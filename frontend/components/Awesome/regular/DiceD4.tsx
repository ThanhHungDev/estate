import * as React from "react";

const SvgDiceD4 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M504.9 289.03L280.85 11.86C274.45 3.96 265.23 0 256 0s-18.45 3.96-24.85 11.86L7.1 289.03c-11.31 14-8.84 34.57 5.47 45.49l224.05 170.94a31.87 31.87 0 0019.38 6.55c6.83 0 13.66-2.18 19.38-6.55l224.05-170.94c14.31-10.92 16.78-31.5 5.47-45.49zM232 87.17v354.38L54.81 306.37 232 87.17zm48 354.38V87.17l177.19 219.2L280 441.55z" />
  </svg>
);

SvgDiceD4.displayName = "SvgDiceD4";
SvgDiceD4.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgDiceD4;

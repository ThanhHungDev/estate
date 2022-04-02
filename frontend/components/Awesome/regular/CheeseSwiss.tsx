import * as React from "react";

const SvgCheeseSwiss = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M176 319.9a48 48 0 1048 48 48 48 0 00-48-48zM299.83 32h-1.49a32.27 32.27 0 00-19.64 7L0 255.87V448a32 32 0 0032 32h448a32 32 0 0032-32V255.87C512 136.05 418 38.2 299.83 32zM196.48 163.8A47.9 47.9 0 10270 106.59l33.6-26.15c87.74 7.67 155.63 79.47 159.64 167.42h-53.9a47.59 47.59 0 00-82.68 0H88.47zM464 432H48V295.89h278.66a47.59 47.59 0 0082.68 0H464z" />
  </svg>
);

SvgCheeseSwiss.displayName = "SvgCheeseSwiss";
SvgCheeseSwiss.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCheeseSwiss;

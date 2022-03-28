import * as React from "react";

const SvgCheese = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M299.83 32h-1.49a32.27 32.27 0 00-19.64 7L0 255.87V448a32 32 0 0032 32h448a32 32 0 0032-32V255.87C512 136.05 418 38.2 299.83 32zm3.77 48.4c87.74 7.67 155.63 79.47 159.64 167.42H88.47zM464 432H48V295.89h416z" />
  </svg>
);

SvgCheese.displayName = "SvgCheese";
SvgCheese.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCheese;

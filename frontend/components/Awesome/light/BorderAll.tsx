import * as React from "react";

const SvgBorderAll = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M432 32H16A16 16 0 000 48v416a16 16 0 0016 16h416a16 16 0 0016-16V48a16 16 0 00-16-16zM32 64h176v176H32zm0 384V272h176v176zm384 0H240V272h176zm0-208H240V64h176z" />
  </svg>
);

SvgBorderAll.displayName = "SvgBorderAll";
SvgBorderAll.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBorderAll;

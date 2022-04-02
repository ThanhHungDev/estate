import * as React from "react";

const SvgFlipboard = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M0 32v448h448V32H0zm358.4 179.2h-89.6v89.6h-89.6v89.6H89.6V121.6h268.8v89.6z" />
  </svg>
);

SvgFlipboard.displayName = "SvgFlipboard";
SvgFlipboard.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFlipboard;

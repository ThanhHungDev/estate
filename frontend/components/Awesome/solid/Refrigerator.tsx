import * as React from "react";

const SvgRefrigerator = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M0 160V48A48 48 0 0148 0h288a48 48 0 0148 48v112h-64V72a8 8 0 00-8-8h-16a8 8 0 00-8 8v88zm320 32v184a8 8 0 01-8 8h-16a8 8 0 01-8-8V192H0v272a48 48 0 0048 48h288a48 48 0 0048-48V192z" />
  </svg>
);

SvgRefrigerator.displayName = "SvgRefrigerator";
SvgRefrigerator.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgRefrigerator;

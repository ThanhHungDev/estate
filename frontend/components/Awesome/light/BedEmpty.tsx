import * as React from "react";

const SvgBedEmpty = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M528 128H32V72a8 8 0 00-8-8H8a8 8 0 00-8 8v368a8 8 0 008 8h16a8 8 0 008-8v-56h576v56a8 8 0 008 8h16a8 8 0 008-8V240a112 112 0 00-112-112zM32 352V160h128v192zm576 0H192V160h336a80.09 80.09 0 0180 80z" />
  </svg>
);

SvgBedEmpty.displayName = "SvgBedEmpty";
SvgBedEmpty.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBedEmpty;

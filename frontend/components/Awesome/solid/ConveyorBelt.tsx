import * as React from "react";

const SvgConveyorBelt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M144 256h352c8.8 0 16-7.2 16-16V16c0-8.8-7.2-16-16-16H384v128l-64-32-64 32V0H144c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16zm400 64H96c-53 0-96 43-96 96s43 96 96 96h448c53 0 96-43 96-96s-43-96-96-96zM128 448c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm192 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm192 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" />
  </svg>
);

SvgConveyorBelt.displayName = "SvgConveyorBelt";
SvgConveyorBelt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgConveyorBelt;

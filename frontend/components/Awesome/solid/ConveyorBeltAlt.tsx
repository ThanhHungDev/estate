import * as React from "react";

const SvgConveyorBeltAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M80 256h224c8.8 0 16-7.2 16-16V16c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16zm320 0h160c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16H400c-8.8 0-16 7.2-16 16v160c0 8.8 7.2 16 16 16zm144 64H96c-53 0-96 43-96 96s43 96 96 96h448c53 0 96-43 96-96s-43-96-96-96zM128 448c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm192 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm192 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" />
  </svg>
);

SvgConveyorBeltAlt.displayName = "SvgConveyorBeltAlt";
SvgConveyorBeltAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgConveyorBeltAlt;
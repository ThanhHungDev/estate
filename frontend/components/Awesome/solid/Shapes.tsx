import * as React from "react";

const SvgShapes = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M128 256a128 128 0 10128 128 128 128 0 00-128-128zm379-54.86L400.07 18.29a37.26 37.26 0 00-64.14 0L229 201.14c-14.24 24.38 3.58 54.86 32.09 54.86h213.82c28.51 0 46.33-30.48 32.09-54.86zM480 288H320a32 32 0 00-32 32v160a32 32 0 0032 32h160a32 32 0 0032-32V320a32 32 0 00-32-32z" />
  </svg>
);

SvgShapes.displayName = "SvgShapes";
SvgShapes.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgShapes;

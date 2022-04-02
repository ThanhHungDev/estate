import * as React from "react";

const SvgWindowMinimize = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M480 480H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h448c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
  </svg>
);

SvgWindowMinimize.displayName = "SvgWindowMinimize";
SvgWindowMinimize.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgWindowMinimize;

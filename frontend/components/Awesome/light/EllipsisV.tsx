import * as React from "react";

const SvgEllipsisV = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 64 512" {...props}>
    <path d="M32 224c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zM0 136c0 17.7 14.3 32 32 32s32-14.3 32-32-14.3-32-32-32-32 14.3-32 32zm0 240c0 17.7 14.3 32 32 32s32-14.3 32-32-14.3-32-32-32-32 14.3-32 32z" />
  </svg>
);

SvgEllipsisV.displayName = "SvgEllipsisV";
SvgEllipsisV.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgEllipsisV;

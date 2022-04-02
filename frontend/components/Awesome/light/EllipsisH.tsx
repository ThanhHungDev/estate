import * as React from "react";

const SvgEllipsisH = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 320 512" {...props}>
    <path d="M192 256c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zm88-32c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm-240 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z" />
  </svg>
);

SvgEllipsisH.displayName = "SvgEllipsisH";
SvgEllipsisH.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgEllipsisH;

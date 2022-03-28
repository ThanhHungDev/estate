import * as React from "react";

const SvgAdjust = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M8 256c0 136.966 111.033 248 248 248s248-111.034 248-248S392.966 8 256 8 8 119.033 8 256zm248 184V72c101.705 0 184 82.311 184 184 0 101.705-82.311 184-184 184z" />
  </svg>
);

SvgAdjust.displayName = "SvgAdjust";
SvgAdjust.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgAdjust;

import * as React from "react";

const SvgEquals = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M416 304H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32zm0-192H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
  </svg>
);

SvgEquals.displayName = "SvgEquals";
SvgEquals.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgEquals;

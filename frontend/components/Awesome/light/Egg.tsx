import * as React from "react";

const SvgEgg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M192 0C86 0 0 214 0 320s86 192 192 192 192-86 192-192S298 0 192 0zm0 480c-88.22 0-160-71.78-160-160 0-100.72 82.24-288 160-288s160 187.28 160 288c0 88.22-71.78 160-160 160z" />
  </svg>
);

SvgEgg.displayName = "SvgEgg";
SvgEgg.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgEgg;

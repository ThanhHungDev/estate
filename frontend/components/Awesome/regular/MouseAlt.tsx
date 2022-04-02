import * as React from "react";

const SvgMouseAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M224 0h-64A160 160 0 000 160v192a160 160 0 00160 160h64a160 160 0 00160-160V160A160 160 0 00224 0zm112 352a112.12 112.12 0 01-112 112h-64A112.12 112.12 0 0148 352V160A112.12 112.12 0 01160 48h64a112.12 112.12 0 01112 112zM192 96a32 32 0 00-32 32v32a32 32 0 0064 0v-32a32 32 0 00-32-32z" />
  </svg>
);

SvgMouseAlt.displayName = "SvgMouseAlt";
SvgMouseAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMouseAlt;

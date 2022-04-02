import * as React from "react";

const SvgBringFront = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M480 368V144a48 48 0 00-48-48H208a48 48 0 00-48 48v224a48 48 0 0048 48h224a48 48 0 0048-48zM64 64h192V32a32 32 0 00-32-32H32A32 32 0 000 32v192a32 32 0 0032 32h96v-64H64zm544 192h-96v64h64v128H384v32a32 32 0 0032 32h192a32 32 0 0032-32V288a32 32 0 00-32-32z" />
  </svg>
);

SvgBringFront.displayName = "SvgBringFront";
SvgBringFront.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBringFront;

import * as React from "react";

const SvgCaravanAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M624 320h-48V160A160 160 0 00416 0H64A64 64 0 000 64v256a64 64 0 0064 64h32a96 96 0 00192 0h336a16 16 0 0016-16v-32a16 16 0 00-16-16zM192 432a48 48 0 1148-48 48.05 48.05 0 01-48 48zm64-240a32 32 0 01-32 32H96a32 32 0 01-32-32v-64a32 32 0 0132-32h128a32 32 0 0132 32zm192 0a32 32 0 01-32 32h-64a32 32 0 01-32-32v-64a32 32 0 0132-32h64a32 32 0 0132 32z" />
  </svg>
);

SvgCaravanAlt.displayName = "SvgCaravanAlt";
SvgCaravanAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCaravanAlt;

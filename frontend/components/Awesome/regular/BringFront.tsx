import * as React from "react";

const SvgBringFront = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M480 368V144a48 48 0 00-48-48H208a48 48 0 00-48 48v224a48 48 0 0048 48h224a48 48 0 0048-48zM208 144h224v224H208zM48 48h160v16h48V48a48 48 0 00-48-48H48A48 48 0 000 48v160a48 48 0 0048 48h80v-48H48zm544 208h-80v48h80v160H432v-16h-48v16a48 48 0 0048 48h160a48 48 0 0048-48V304a48 48 0 00-48-48zM96 160h32v-16a79.24 79.24 0 0116.41-48H96zm448 192h-32v16a79.24 79.24 0 01-16.41 48H544z" />
  </svg>
);

SvgBringFront.displayName = "SvgBringFront";
SvgBringFront.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBringFront;

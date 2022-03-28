import * as React from "react";

const SvgRulerHorizontal = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M576 160v192a32 32 0 01-32 32H32a32 32 0 01-32-32V160a32 32 0 0132-32h48v88a8 8 0 008 8h16a8 8 0 008-8v-88h64v88a8 8 0 008 8h16a8 8 0 008-8v-88h64v88a8 8 0 008 8h16a8 8 0 008-8v-88h64v88a8 8 0 008 8h16a8 8 0 008-8v-88h64v88a8 8 0 008 8h16a8 8 0 008-8v-88h48a32 32 0 0132 32z"
      opacity={0.4}
    />
    <path
      d="M176 216a8 8 0 008 8h16a8 8 0 008-8v-88h-32zm-96 0a8 8 0 008 8h16a8 8 0 008-8v-88H80zm192 0a8 8 0 008 8h16a8 8 0 008-8v-88h-32zm192-88v88a8 8 0 008 8h16a8 8 0 008-8v-88zm-96 88a8 8 0 008 8h16a8 8 0 008-8v-88h-32z"
      className="ruler-horizontal_svg__fa-primary"
    />
  </svg>
);

SvgRulerHorizontal.displayName = "SvgRulerHorizontal";
SvgRulerHorizontal.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgRulerHorizontal;

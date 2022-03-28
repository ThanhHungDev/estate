import * as React from "react";

const SvgMouse = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M224 0h-64A160 160 0 000 160v192a160 160 0 00160 160h64a160 160 0 00160-160V160A160 160 0 00224 0zm112 160v16H216V48h8a112.12 112.12 0 01112 112zM160 48h8v128H48v-16A112.12 112.12 0 01160 48zm64 416h-64A112.12 112.12 0 0148 352V224h288v128a112.12 112.12 0 01-112 112z" />
  </svg>
);

SvgMouse.displayName = "SvgMouse";
SvgMouse.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMouse;

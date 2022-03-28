import * as React from "react";

const SvgMouse = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M224 0h-64A160 160 0 000 160v192a160 160 0 00160 160h64a160 160 0 00160-160V160A160 160 0 00224 0zM32 160A128.14 128.14 0 01160 32h16v160H32zm320 192a128.14 128.14 0 01-128 128h-64A128.14 128.14 0 0132 352V224h320zm0-160H208V32h16a128.14 128.14 0 01128 128z" />
  </svg>
);

SvgMouse.displayName = "SvgMouse";
SvgMouse.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMouse;

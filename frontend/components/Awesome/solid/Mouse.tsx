import * as React from "react";

const SvgMouse = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M0 352a160 160 0 00160 160h64a160 160 0 00160-160V224H0zM176 0h-16A160 160 0 000 160v32h176zm48 0h-16v192h176v-32A160 160 0 00224 0z" />
  </svg>
);

SvgMouse.displayName = "SvgMouse";
SvgMouse.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMouse;

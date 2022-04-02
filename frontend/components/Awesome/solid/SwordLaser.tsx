import * as React from "react";

const SvgSwordLaser = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M105.499 327.287l79.198 79.194 22.628-22.627-79.198-79.194zM9.37 412.135a32.002 32.002 0 00-.019 45.234l45.234 45.276a32.078 32.078 0 0045.261.022l79.207-79.202-90.514-90.509zm186.64-175.355a8 8 0 00-11.314 0l-11.314 11.313a8 8 0 000 11.314L252.58 338.6a8 8 0 0011.314 0l11.314-11.313a8 8 0 000-11.313zm-56.57 56.567l79.198 79.194 22.628-22.627-79.198-79.194zM504.97 7.029a24.007 24.007 0 00-33.279-.641L225.587 232.414l53.987 53.985L505.612 40.306a24.005 24.005 0 00-.64-33.277z" />
  </svg>
);

SvgSwordLaser.displayName = "SvgSwordLaser";
SvgSwordLaser.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSwordLaser;

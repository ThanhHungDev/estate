import * as React from "react";

const SvgSwordLaser = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M504.969 7.028a24.003 24.003 0 00-33.275-.64L225.586 232.414l53.986 53.985L505.61 40.306a24 24 0 00-.641-33.278z"
      opacity={0.4}
    />
    <path
      d="M139.439 293.347l79.201 79.193 22.626-22.626-79.198-79.194zm-33.943 33.94l79.198 79.194 22.63-22.627-79.198-79.193zm169.712-11.314l-79.197-79.193a8.002 8.002 0 00-11.317 0l-11.313 11.314a7.997 7.997 0 000 11.312L252.58 338.6a7.998 7.998 0 0011.313 0l11.316-11.313a8.006 8.006 0 000-11.314zM9.368 412.135a32.005 32.005 0 00-.015 45.235l45.232 45.274a32.08 32.08 0 0045.263.024l79.205-79.203-90.514-90.508z"
      className="sword-laser_svg__fa-primary"
    />
  </svg>
);

SvgSwordLaser.displayName = "SvgSwordLaser";
SvgSwordLaser.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSwordLaser;

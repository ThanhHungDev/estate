import * as React from "react";

const SvgDiscDrive = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M256 224a32 32 0 1032 32 32 32 0 00-32-32zm248 224h-24V96a64 64 0 00-64-64H96a64 64 0 00-64 64v352H8a8 8 0 00-8 8v16a8 8 0 008 8h496a8 8 0 008-8v-16a8 8 0 00-8-8zm-56 0H64V96a32 32 0 0132-32h320a32 32 0 0132 32zM256 96a160 160 0 10160 160A160 160 0 00256 96zm0 288a128 128 0 11128-128 128.14 128.14 0 01-128 128z" />
  </svg>
);

SvgDiscDrive.displayName = "SvgDiscDrive";
SvgDiscDrive.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgDiscDrive;

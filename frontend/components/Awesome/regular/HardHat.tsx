import * as React from "react";

const SvgHardHat = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M480 320c0-101.46-67.5-187-160-214.6V80a16 16 0 00-16-16h-96a16 16 0 00-16 16v25.4C99.49 133 32 218.54 32 320a32 32 0 00-32 32v64a32 32 0 0032 32h448a32 32 0 0032-32v-64a32 32 0 00-32-32zM172.16 165.29l17.78 81.27a12 12 0 0011.72 9.44H212a12 12 0 0012-12V112h64v132a12 12 0 0012 12h10.34a12 12 0 0011.72-9.44l17.78-81.27A176.14 176.14 0 01432 320H80a176.14 176.14 0 0192.16-154.71zM464 400H48v-32h416z" />
  </svg>
);

SvgHardHat.displayName = "SvgHardHat";
SvgHardHat.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHardHat;

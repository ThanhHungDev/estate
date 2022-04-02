import * as React from "react";

const SvgKite = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M72 251l24 15.87L120 251v-27a88 88 0 00-88-88H16a16 16 0 00-16 16v16a16 16 0 0016 16h16a40 40 0 0140 40zM630.63 9.37L475.1 164.9l153.82 153.82A32 32 0 00640 294.5V32a31.9 31.9 0 00-9.37-22.63zm-309.36 1.74a32 32 0 00-7 13.69l-80.09 347.09-87.54 87.54a15.6 15.6 0 01-26.63-11V325L96 309.16 72 325v118.31c0 16.55 5 33 15.7 45.71 26.48 31.53 69 28.26 92.87 4.34l87.55-87.55-6.7 1.55a24 24 0 01-22.36-6.42L475 165z"
      opacity={0.4}
    />
    <path
      d="M154.69 228L96 266.84 37.31 228c-16-10.55-37.31.79-37.31 19.8v80.32c0 19 21.36 30.35 37.31 19.8L96 309.16 154.69 348c15.95 10.55 37.31-.79 37.31-19.8v-80.36c0-19.01-21.36-30.35-37.31-19.84zM630.63 9.37A31.9 31.9 0 00608 0H345.5a32.08 32.08 0 00-24.23 11.11L475 165 239.06 400.94a24 24 0 0022.36 6.42L615.2 325.7a31.76 31.76 0 0013.72-7L475.1 164.9z"
      className="kite_svg__fa-primary"
    />
  </svg>
);

SvgKite.displayName = "SvgKite";
SvgKite.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgKite;

import * as React from "react";

const SvgWasher = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 446 512" {...props}>
    <path d="M384-1H64A64 64 0 000 63v416a32 32 0 0032 32h384a32 32 0 0032-32V63a64 64 0 00-64-64zm32 480H32V63a32 32 0 0132-32h320a32 32 0 0132 32zM80 95a16 16 0 10-16-16 16 16 0 0016 16zm64 0a16 16 0 10-16-16 16 16 0 0016 16zm80 32a160 160 0 10160 160 160 160 0 00-160-160zm0 288a128 128 0 11128-128 128.14 128.14 0 01-128 128zm36.87-131.66a51.23 51.23 0 01-73.74 0A51.81 51.81 0 01150 299c-7.71 0-14.74-2.15-21.31-5.16C132.27 343.53 173.41 383 224 383s91.73-39.47 95.31-89.16c-6.57 3-13.6 5.16-21.31 5.16a51.81 51.81 0 01-37.13-15.66z" />
  </svg>
);

SvgWasher.displayName = "SvgWasher";
SvgWasher.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgWasher;

import * as React from "react";

const SvgSkiJump = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M510.8 191.5c-1.5-8.7-10.1-14.5-18.4-13.1-8.7 1.5-14.6 9.7-13.1 18.5 3.8 22.6-7 45.5-26.3 56.5L201.1 382.9 247.9 269l116.7-90.8c12.5-9.7 21.5-29.3 18.4-50.3 36 .7 65-28.5 65-63.9 0-35.3-28.7-64-64-64s-64 28.7-64 64c0 5.6.9 10.9 2.3 16H160c-26.5 0-48 21.5-48 48s21.5 48 48 48h39.8c-33.7 36.9-37.7 45.5-63.7 111-7.2 18.1-16.3 40.9-28.5 70.7-4.9 11.8-4.9 24.9.1 36.7 4.5 10.9 13 19.2 23.6 24.3l-122.6 63c-7.9 4-11 13.7-6.9 21.5 2.8 5.5 8.4 8.7 14.2 8.7 2.5 0 5-.6 7.3-1.8l444.9-228.8c31.5-17.8 48.7-54 42.6-89.8zM384 32c17.7 0 32 14.4 32 32s-14.3 32-32 32-32-14.4-32-32 14.4-32 32-32zM137.2 369.9c70-170.2 36.9-116 135.2-225.9H160c-8.8 0-16-7.2-16-16s7.2-16 16-16h168c21.4 0 32.1 25.9 17 41l-121.9 94.8c-.8.8-2.2 2.8-3.1 5l-53.3 129.3c-3.3 8.1-12.5 12.1-20.9 8.7-8-3.4-11.9-12.7-8.6-20.9z" />
  </svg>
);

SvgSkiJump.displayName = "SvgSkiJump";
SvgSkiJump.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSkiJump;

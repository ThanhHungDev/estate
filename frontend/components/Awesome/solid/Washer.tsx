import * as React from "react";

const SvgWasher = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 446 512" {...props}>
    <path d="M384 0H64A64 64 0 000 64v416a32 32 0 0032 32h384a32 32 0 0032-32V64a64 64 0 00-64-64zM184 64a24 24 0 11-24 24 24 24 0 0124-24zM64 88a24 24 0 1124 24 24 24 0 01-24-24zm160 360a144 144 0 11144-144 144 144 0 01-144 144zm36.87-163.66a51.23 51.23 0 01-73.74 0 51.79 51.79 0 01-73.24 1A110.76 110.76 0 00112 304a112 112 0 00224 0 110.76 110.76 0 00-1.89-18.69 51.79 51.79 0 01-73.24-1z" />
  </svg>
);

SvgWasher.displayName = "SvgWasher";
SvgWasher.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgWasher;

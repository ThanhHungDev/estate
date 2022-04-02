import * as React from "react";

const SvgSortCircle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm104.57 311.41l-91.5 91.18a18.41 18.41 0 01-26.07 0l-91.57-91.18C139.83 307.85 148 288 164.5 288h183c16.5 0 24.67 19.85 13.07 31.41zM347.5 224h-183c-16.46 0-24.67-19.85-13.07-31.42L243 101.41a18.41 18.41 0 0126.07 0l91.5 91.17C372.17 204.15 364 224 347.5 224z" />
  </svg>
);

SvgSortCircle.displayName = "SvgSortCircle";
SvgSortCircle.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSortCircle;

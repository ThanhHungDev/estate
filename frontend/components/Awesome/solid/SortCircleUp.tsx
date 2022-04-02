import * as React from "react";

const SvgSortCircleUp = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M256 378.33L314.3 320H197.59zM256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zM151.43 192.58L243 101.41a18.41 18.41 0 0126.07 0l91.5 91.17C372.17 204.15 364 224 347.5 224h-183c-16.5 0-24.67-19.85-13.07-31.42zm209.14 126.84l-91.5 91.17a18.41 18.41 0 01-26.07 0l-91.57-91.17C139.83 307.85 148 288 164.5 288h183c16.5 0 24.67 19.85 13.07 31.42z" />
  </svg>
);

SvgSortCircleUp.displayName = "SvgSortCircleUp";
SvgSortCircleUp.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSortCircleUp;

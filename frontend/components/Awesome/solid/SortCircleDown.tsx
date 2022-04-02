import * as React from "react";

const SvgSortCircleDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M197.7 192h116.71L256 133.67zM256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm104.57 311.42L269 410.59a18.41 18.41 0 01-26.07 0l-91.5-91.17C139.83 307.85 148 288 164.5 288h183c16.5 0 24.67 19.85 13.07 31.42zM347.5 224h-183c-16.46 0-24.67-19.85-13.07-31.42l91.5-91.17a18.41 18.41 0 0126.07 0l91.57 91.17C372.17 204.15 364 224 347.5 224z" />
  </svg>
);

SvgSortCircleDown.displayName = "SvgSortCircleDown";
SvgSortCircleDown.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSortCircleDown;

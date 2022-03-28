import * as React from "react";

const SvgSortSizeUp = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M25.07 140.44a11.93 11.93 0 0016.91.09L96 87.86V472a8 8 0 008 8h16a8 8 0 008-8V88.08l53.94 52.35a12 12 0 0016.92 0l5.64-5.66a12 12 0 000-17l-84.06-82.3a11.94 11.94 0 00-16.87 0l-84 82.32a12 12 0 00-.09 17zM484 32H284a28 28 0 00-28 28v168a28 28 0 0028 28h200a28 28 0 0028-28V60a28 28 0 00-28-28zm-4 192H288V64h192zm-52 96H276a20 20 0 00-20 20v120a20 20 0 0020 20h152a20 20 0 0020-20V340a20 20 0 00-20-20zm-12 128H288v-96h128z" />
  </svg>
);

SvgSortSizeUp.displayName = "SvgSortSizeUp";
SvgSortSizeUp.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSortSizeUp;

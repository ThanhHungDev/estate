import * as React from "react";

const SvgSortSizeDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M198.93 371.56a11.93 11.93 0 00-16.91-.09l-54 52.67V40a8 8 0 00-8-8H104a8 8 0 00-8 8v383.92l-53.94-52.35a12 12 0 00-16.92 0l-5.64 5.66a12 12 0 000 17l84.06 82.3a11.94 11.94 0 0016.87 0l84-82.32a12 12 0 00.09-17zM484 32H284a28 28 0 00-28 28v168a28 28 0 0028 28h200a28 28 0 0028-28V60a28 28 0 00-28-28zm-4 192H288V64h192zm-52 96H276a20 20 0 00-20 20v120a20 20 0 0020 20h152a20 20 0 0020-20V340a20 20 0 00-20-20zm-12 128H288v-96h128z" />
  </svg>
);

SvgSortSizeDown.displayName = "SvgSortSizeDown";
SvgSortSizeDown.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSortSizeDown;

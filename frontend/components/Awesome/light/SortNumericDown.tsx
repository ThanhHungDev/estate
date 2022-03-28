import * as React from "react";

const SvgSortNumericDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M344.49 257.48a72 72 0 1052.16 132c-8.84 31.22-35.92 54.86-69.08 58a8.07 8.07 0 00-7.57 7.92v16.07a8 8 0 008.38 8.05A112.15 112.15 0 00432 367.86v-40a72.13 72.13 0 00-87.51-70.38zM360 367.86a40 40 0 1140-40 40 40 0 01-40 40zM424 192h-40V48a16 16 0 00-16-16h-12a16 16 0 00-13.57 7.52l-20 32A16 16 0 00336 96h16v96h-40a8 8 0 00-8 8v16a8 8 0 008 8h112a8 8 0 008-8v-16a8 8 0 00-8-8zM198.93 371.56a11.93 11.93 0 00-16.91-.09l-54 52.67V40a8 8 0 00-8-8H104a8 8 0 00-8 8v383.92l-53.94-52.35a12 12 0 00-16.92 0l-5.64 5.66a12 12 0 000 17l84.06 82.3a11.94 11.94 0 0016.87 0l84-82.32a12 12 0 00.09-17z" />
  </svg>
);

SvgSortNumericDown.displayName = "SvgSortNumericDown";
SvgSortNumericDown.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSortNumericDown;

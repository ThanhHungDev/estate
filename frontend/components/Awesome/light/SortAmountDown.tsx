import * as React from "react";

const SvgSortAmountDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M376 288H264a8 8 0 00-8 8v16a8 8 0 008 8h112a8 8 0 008-8v-16a8 8 0 00-8-8zm-64 96h-48a8 8 0 00-8 8v16a8 8 0 008 8h48a8 8 0 008-8v-16a8 8 0 00-8-8zM504 96H264a8 8 0 00-8 8v16a8 8 0 008 8h240a8 8 0 008-8v-16a8 8 0 00-8-8zm-64 96H264a8 8 0 00-8 8v16a8 8 0 008 8h176a8 8 0 008-8v-16a8 8 0 00-8-8zM198.93 371.56a11.93 11.93 0 00-16.91-.09l-54 52.67V40a8 8 0 00-8-8H104a8 8 0 00-8 8v383.92l-53.94-52.35a12 12 0 00-16.92 0l-5.64 5.66a12 12 0 000 17l84.06 82.3a11.94 11.94 0 0016.87 0l84-82.32a12 12 0 00.09-17z" />
  </svg>
);

SvgSortAmountDown.displayName = "SvgSortAmountDown";
SvgSortAmountDown.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSortAmountDown;

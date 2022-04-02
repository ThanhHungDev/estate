import * as React from "react";

const SvgSortAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M364.5 117.81l-84.06-82.3a11.94 11.94 0 00-16.87 0l-84 82.32a12 12 0 00-.09 17l5.61 5.68a11.93 11.93 0 0016.91.09l54-52.67V472a8 8 0 008 8h16a8 8 0 008-8V88.08l53.94 52.35a12 12 0 0016.92 0l5.64-5.66a12 12 0 000-16.96zM198.93 371.56a11.93 11.93 0 00-16.91-.09l-54 52.67V40a8 8 0 00-8-8H104a8 8 0 00-8 8v383.92l-53.94-52.35a12 12 0 00-16.92 0l-5.64 5.66a12 12 0 000 17l84.06 82.3a11.94 11.94 0 0016.87 0l84-82.32a12 12 0 00.09-17z" />
  </svg>
);

SvgSortAlt.displayName = "SvgSortAlt";
SvgSortAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSortAlt;

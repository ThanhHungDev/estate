import * as React from "react";

const SvgTablet = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M400 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM224 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" />
  </svg>
);

SvgTablet.displayName = "SvgTablet";
SvgTablet.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTablet;

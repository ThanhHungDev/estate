import * as React from "react";

const SvgSuperscript = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M344 64h-56a16 16 0 00-13.49 7.41L176 226.2 77.5 71.41A16 16 0 0064 64H8a8 8 0 00-8 8v16a8 8 0 008 8h47.22L157 256 55.22 416H8a8 8 0 00-8 8v16a8 8 0 008 8h56a16 16 0 0013.5-7.41L176 285.8l98.51 154.79A16 16 0 00288 448h56a8 8 0 008-8v-16a8 8 0 00-8-8h-47.22L195 256 296.78 96H344a8 8 0 008-8V72a8 8 0 00-8-8zm160 128h-40V16a16 16 0 00-16-16h-16a16 16 0 00-14.29 8.83l-16 32A16 16 0 00416 64h16v128h-40a8 8 0 00-8 8v16a8 8 0 008 8h112a8 8 0 008-8v-16a8 8 0 00-8-8z" />
  </svg>
);

SvgSuperscript.displayName = "SvgSuperscript";
SvgSuperscript.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSuperscript;

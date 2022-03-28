import * as React from "react";

const SvgCommentAltMedical = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M448 0H64A64 64 0 000 64v288a64 64 0 0064 64h96v84a12 12 0 0012.05 12 11.84 11.84 0 007.08-2.37L304 416h144a64 64 0 0064-64V64a64 64 0 00-64-64zm16 352a16 16 0 01-16 16H288l-12.79 9.6L208 428v-60H64a16 16 0 01-16-16V64a16 16 0 0116-16h384a16 16 0 0116 16zM344 176h-56v-56a8 8 0 00-8-8h-48a8 8 0 00-8 8v56h-56a8 8 0 00-8 8v48a8 8 0 008 8h56v56a8 8 0 008 8h48a8 8 0 008-8v-56h56a8 8 0 008-8v-48a8 8 0 00-8-8z" />
  </svg>
);

SvgCommentAltMedical.displayName = "SvgCommentAltMedical";
SvgCommentAltMedical.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCommentAltMedical;

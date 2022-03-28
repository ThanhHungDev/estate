import * as React from "react";

const SvgCommentAltMedical = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M448 0H64A64 64 0 000 64v288a64 64 0 0064 64h96v84a12 12 0 0012.05 12 11.84 11.84 0 007.08-2.37L304 416h144a64 64 0 0064-64V64a64 64 0 00-64-64zm32 352a32 32 0 01-32 32H293.34l-8.54 6.4L192 460v-76H64a32 32 0 01-32-32V64a32 32 0 0132-32h384a32 32 0 0132 32zM344 176h-56v-56a8 8 0 00-8-8h-48a8 8 0 00-8 8v56h-56a8 8 0 00-8 8v48a8 8 0 008 8h56v56a8 8 0 008 8h48a8 8 0 008-8v-56h56a8 8 0 008-8v-48a8 8 0 00-8-8z" />
  </svg>
);

SvgCommentAltMedical.displayName = "SvgCommentAltMedical";
SvgCommentAltMedical.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCommentAltMedical;

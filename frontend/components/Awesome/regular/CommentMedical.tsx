import * as React from "react";

const SvgCommentMedical = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M344 208h-56v-56a8 8 0 00-8-8h-48a8 8 0 00-8 8v56h-56a8 8 0 00-8 8v48a8 8 0 008 8h56v56a8 8 0 008 8h48a8 8 0 008-8v-56h56a8 8 0 008-8v-48a8 8 0 00-8-8zM256 32C114.62 32 0 125.12 0 240c0 47.55 19.86 91.23 52.9 126.27C38 405.72 7 439.06 6.54 439.5A24 24 0 0024 480c61.51 0 110-25.72 139.15-46.33A307.33 307.33 0 00256 448c141.38 0 256-93.13 256-208S397.38 32 256 32zm0 368a259.17 259.17 0 01-78.37-12.09l-22.75-7.21-19.47 13.78a212 212 0 01-57.47 29 247.26 247.26 0 0019.86-40.25l10.61-28.07-20.59-21.83C69.65 314.07 48 282.25 48 240c0-88.22 93.31-160 208-160s208 71.78 208 160-93.31 160-208 160z" />
  </svg>
);

SvgCommentMedical.displayName = "SvgCommentMedical";
SvgCommentMedical.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCommentMedical;
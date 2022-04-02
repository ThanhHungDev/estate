import * as React from "react";

const SvgCowbellMore = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M480 192a160 160 0 10160 160 160 160 0 00-160-160zm0 288a128 128 0 11128-128 128.14 128.14 0 01-128 128zm72-144h-56v-56a8 8 0 00-8-8h-16a8 8 0 00-8 8v56h-56a8 8 0 00-8 8v16a8 8 0 008 8h56v56a8 8 0 008 8h16a8 8 0 008-8v-56h56a8 8 0 008-8v-16a8 8 0 00-8-8zM32 480l63.36-352h257.33l12.63 70.26a192.21 192.21 0 0129.28-18.05l-10.41-57.87A32 32 0 00352.64 96h-16V48a48.1 48.1 0 00-48.12-48H160.29a48.1 48.1 0 00-48.09 48v48H95.36a32 32 0 00-31.56 26.35l-63.29 352A32 32 0 0032.07 512H374a192.56 192.56 0 01-36.77-32zM144.2 48a16.07 16.07 0 0116.09-16h128.23a16.07 16.07 0 0116.09 16v48H144.2z" />
  </svg>
);

SvgCowbellMore.displayName = "SvgCowbellMore";
SvgCowbellMore.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCowbellMore;

import * as React from "react";

const SvgBreadLoaf = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M400 32H240C107.45 32 0 103.63 0 192c0 35.35 26.86 64 60 64h4v192a32 32 0 0032 32h448a32 32 0 0032-32V256h4c33.14 0 60-28.65 60-64 0-88.37-107.45-160-240-160zm20 176h-52v224H112V208H60c-5.79 0-12-6.43-12-16 0-59.66 89.72-112 192-112s192 52.34 192 112c0 9.57-6.21 16-12 16z" />
  </svg>
);

SvgBreadLoaf.displayName = "SvgBreadLoaf";
SvgBreadLoaf.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBreadLoaf;

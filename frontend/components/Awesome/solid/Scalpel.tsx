import * as React from "react";

const SvgScalpel = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M482.7 11.85c-29.2-20.83-70.18-13.03-93.49 14.22l-201.5 235.46c-8.9 10.41-1.51 26.47 12.19 26.47h131.94c9.37 0 18.28-4.1 24.37-11.22l139.02-162.44c26.37-30.8 21.23-78.41-12.53-102.49zM0 512c87 .07 170.28-29.18 234.29-81.16.2-.16.39-.32.59-.48 31.37-25.71 46.72-63.93 46.72-102.32V320H176L0 512z" />
  </svg>
);

SvgScalpel.displayName = "SvgScalpel";
SvgScalpel.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgScalpel;

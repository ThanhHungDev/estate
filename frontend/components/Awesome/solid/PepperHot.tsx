import * as React from "react";

const SvgPepperHot = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M330.67 263.12V173.4l-52.75-24.22C219.44 218.76 197.58 400 56 400a56 56 0 000 112c212.64 0 370.65-122.87 419.18-210.34l-37.05-38.54zm131.09-128.37C493.92 74.91 477.18 26.48 458.62 3a8 8 0 00-11.93-.59l-22.9 23a8.06 8.06 0 00-.89 10.23c6.86 10.36 17.05 35.1-1.4 72.32A142.85 142.85 0 00364.34 96c-28 0-54 8.54-76.34 22.59l74.67 34.29v78.24h89.09L506.44 288c3.26-12.62 5.56-25.63 5.56-39.31a154 154 0 00-50.24-113.94z" />
  </svg>
);

SvgPepperHot.displayName = "SvgPepperHot";
SvgPepperHot.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPepperHot;

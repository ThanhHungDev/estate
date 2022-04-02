import * as React from "react";

const SvgHurricane = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M176 96l24.5-74.8C204.2 10 194.9-1.3 183.1.1 80 12.4 0 101.6 0 208c0 114.9 93.1 208 208 208l-24.5 74.8c-3.7 11.2 5.6 22.5 17.4 21.1C304 499.6 384 410.4 384 304c0-114.9-93.1-208-208-208zm16 256c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96zm0-128c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z" />
  </svg>
);

SvgHurricane.displayName = "SvgHurricane";
SvgHurricane.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHurricane;

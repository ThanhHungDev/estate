import * as React from "react";

const SvgFigma = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M277 170.7A85.35 85.35 0 00277 0H106.3a85.3 85.3 0 000 170.6 85.35 85.35 0 000 170.7 85.35 85.35 0 1085.3 85.4v-256zm0 0a85.3 85.3 0 1085.3 85.3 85.31 85.31 0 00-85.3-85.3z" />
  </svg>
);

SvgFigma.displayName = "SvgFigma";
SvgFigma.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFigma;

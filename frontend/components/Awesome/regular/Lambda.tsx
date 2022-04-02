import * as React from "react";

const SvgLambda = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M440 432h-72.91L183.81 50.15A32.01 32.01 0 00154.96 32H8c-4.42 0-8 3.58-8 8v32c0 4.42 3.58 8 8 8h136.91l9.08 18.92L1.31 457.7C-3.21 468.25 4.53 480 16.02 480h17.41c6.4 0 12.18-3.81 14.71-9.7l134.01-312.7 146.04 304.25A31.998 31.998 0 00357.04 480H440c4.42 0 8-3.58 8-8v-32c0-4.42-3.58-8-8-8z" />
  </svg>
);

SvgLambda.displayName = "SvgLambda";
SvgLambda.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgLambda;

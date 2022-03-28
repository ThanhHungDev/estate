import * as React from "react";

const SvgLambda = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M424 384h-43.5L197.6 48.68A32.018 32.018 0 00169.5 32H24C10.75 32 0 42.74 0 56v48c0 13.25 10.75 24 24 24h107.5l4.63 8.49L3.25 446.55C-3.53 462.38 8.08 480 25.31 480h52.23c9.6 0 18.28-5.72 22.06-14.55l95.02-221.72L314.4 463.32A32.018 32.018 0 00342.5 480H424c13.25 0 24-10.75 24-24v-48c0-13.26-10.75-24-24-24z" />
  </svg>
);

SvgLambda.displayName = "SvgLambda";
SvgLambda.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgLambda;

import * as React from "react";

const SvgBetamax = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M464 400H48V192H0v208a48 48 0 0048 48h416a48 48 0 0048-48V192h-48zM240 288a80 80 0 10-80 80 80 80 0 0080-80zm-112 0a32 32 0 1132 32 32 32 0 01-32-32zM496 64H16A16 16 0 000 80v80h512V80a16 16 0 00-16-16zm-96 304a32 32 0 0032-32v-96a32 32 0 00-32-32h-96a32 32 0 00-32 32v96a32 32 0 0032 32zm-80-112h64v64h-64z" />
  </svg>
);

SvgBetamax.displayName = "SvgBetamax";
SvgBetamax.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBetamax;

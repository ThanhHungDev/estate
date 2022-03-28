import * as React from "react";

const SvgBetamax = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M320 368h96a32 32 0 0032-32v-96a32 32 0 00-32-32h-96a32 32 0 00-32 32v96a32 32 0 0032 32zm0-128h96v96h-96zm-160 72a24 24 0 10-24-24 24 24 0 0024 24zm0 72a96 96 0 10-96-96 96 96 0 0096 96zm0-160a64 64 0 11-64 64 64.07 64.07 0 0164-64zM496 64H16A16 16 0 000 80v320a48 48 0 0048 48h416a48 48 0 0048-48V80a16 16 0 00-16-16zm-16 336a16 16 0 01-16 16H48a16 16 0 01-16-16V160h448zm0-272H32V96h448z" />
  </svg>
);

SvgBetamax.displayName = "SvgBetamax";
SvgBetamax.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBetamax;

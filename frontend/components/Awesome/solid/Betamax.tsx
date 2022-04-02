import * as React from "react";

const SvgBetamax = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M496 64H16A16 16 0 000 80v48h512V80a16 16 0 00-16-16zM0 400a48 48 0 0048 48h416a48 48 0 0048-48V160H0zm288-176h160v160H288zm-144 0a80 80 0 11-80 80 80 80 0 0180-80zm0 112a32 32 0 10-32-32 32 32 0 0032 32z" />
  </svg>
);

SvgBetamax.displayName = "SvgBetamax";
SvgBetamax.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBetamax;

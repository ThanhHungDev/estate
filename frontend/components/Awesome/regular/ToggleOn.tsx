import * as React from "react";

const SvgToggleOn = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M384 64H192C86 64 0 150 0 256s86 192 192 192h192c106 0 192-86 192-192S490 64 384 64zm0 336c-79.6 0-144-64.4-144-144s64.4-144 144-144 144 64.4 144 144-64.4 144-144 144z" />
  </svg>
);

SvgToggleOn.displayName = "SvgToggleOn";
SvgToggleOn.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgToggleOn;

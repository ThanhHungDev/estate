import * as React from "react";

const SvgBringForward = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M352 304V48a48 48 0 00-48-48H48A48 48 0 000 48v256a48 48 0 0048 48h256a48 48 0 0048-48zm112-144h-80v64h64v224H224v-64h-64v80a48 48 0 0048 48h256a48 48 0 0048-48V208a48 48 0 00-48-48z" />
  </svg>
);

SvgBringForward.displayName = "SvgBringForward";
SvgBringForward.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBringForward;

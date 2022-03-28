import * as React from "react";

const SvgSendBackward = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M464 160H208a48 48 0 00-48 48v256a48 48 0 0048 48h256a48 48 0 0048-48V208a48 48 0 00-48-48zm-16 288H224V224h224zm-96-320V48a48 48 0 00-48-48H48A48 48 0 000 48v256a48 48 0 0048 48h80V208a80.09 80.09 0 0180-80z" />
  </svg>
);

SvgSendBackward.displayName = "SvgSendBackward";
SvgSendBackward.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSendBackward;

import * as React from "react";

const SvgVhs = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M464 400H48V192H0v208a48 48 0 0048 48h416a48 48 0 0048-48V192h-48zm32-336H16A16 16 0 000 80v80h512V80a16 16 0 00-16-16zM344 368a88 88 0 000-176H168a88 88 0 000 176zm8-120a32 32 0 010 64zm-144-8h96v80h-96zm-48 72a32 32 0 010-64z" />
  </svg>
);

SvgVhs.displayName = "SvgVhs";
SvgVhs.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgVhs;

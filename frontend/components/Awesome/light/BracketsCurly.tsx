import * as React from "react";

const SvgBracketsCurly = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M571.31 244.69l-45.25-45.25A48 48 0 01512 165.49V80a48 48 0 00-48-48h-72a8 8 0 00-8 8v16a8 8 0 008 8h72a16 16 0 0116 16v85.48a80 80 0 0023.44 56.58L537.38 256l-33.94 33.94A80 80 0 00480 346.52V432a16 16 0 01-16 16h-72a8 8 0 00-8 8v16a8 8 0 008 8h72a48 48 0 0048-48v-85.49a48 48 0 0114.06-33.95l45.25-45.25a16 16 0 000-22.62zM184 32h-72a48 48 0 00-48 48v85.49a48 48 0 01-14.06 33.95L4.69 244.69a16 16 0 000 22.62l45.25 45.25A48 48 0 0164 346.51V432a48 48 0 0048 48h72a8 8 0 008-8v-16a8 8 0 00-8-8h-72a16 16 0 01-16-16v-85.48a80 80 0 00-23.44-56.58L38.62 256l33.94-33.94A80 80 0 0096 165.48V80a16 16 0 0116-16h72a8 8 0 008-8V40a8 8 0 00-8-8z" />
  </svg>
);

SvgBracketsCurly.displayName = "SvgBracketsCurly";
SvgBracketsCurly.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBracketsCurly;

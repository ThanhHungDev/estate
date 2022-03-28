import * as React from "react";

const SvgBrackets = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M120 32H48A48 48 0 000 80v352a48 48 0 0048 48h72a8 8 0 008-8v-16a8 8 0 00-8-8H48a16 16 0 01-16-16V80a16 16 0 0116-16h72a8 8 0 008-8V40a8 8 0 00-8-8zm280 0h-72a8 8 0 00-8 8v16a8 8 0 008 8h72a16 16 0 0116 16v352a16 16 0 01-16 16h-72a8 8 0 00-8 8v16a8 8 0 008 8h72a48 48 0 0048-48V80a48 48 0 00-48-48z" />
  </svg>
);

SvgBrackets.displayName = "SvgBrackets";
SvgBrackets.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBrackets;

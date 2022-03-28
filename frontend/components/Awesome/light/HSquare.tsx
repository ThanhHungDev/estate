import * as React from "react";

const SvgHSquare = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm16 400c0 8.822-7.178 16-16 16H48c-8.822 0-16-7.178-16-16V80c0-8.822 7.178-16 16-16h352c8.822 0 16 7.178 16 16v352zm-80-292v232c0 6.627-5.373 12-12 12h-8c-6.627 0-12-5.373-12-12V272H144v100c0 6.627-5.373 12-12 12h-8c-6.627 0-12-5.373-12-12V140c0-6.627 5.373-12 12-12h8c6.627 0 12 5.373 12 12v100h160V140c0-6.627 5.373-12 12-12h8c6.627 0 12 5.373 12 12z" />
  </svg>
);

SvgHSquare.displayName = "SvgHSquare";
SvgHSquare.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHSquare;

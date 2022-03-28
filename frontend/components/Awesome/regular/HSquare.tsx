import * as React from "react";

const SvgHSquare = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 01-6-6V86a6 6 0 016-6h340a6 6 0 016 6v340a6 6 0 01-6 6zm-50-292v232c0 6.627-5.373 12-12 12h-24c-6.627 0-12-5.373-12-12v-92H152v92c0 6.627-5.373 12-12 12h-24c-6.627 0-12-5.373-12-12V140c0-6.627 5.373-12 12-12h24c6.627 0 12 5.373 12 12v92h144v-92c0-6.627 5.373-12 12-12h24c6.627 0 12 5.373 12 12z" />
  </svg>
);

SvgHSquare.displayName = "SvgHSquare";
SvgHSquare.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHSquare;

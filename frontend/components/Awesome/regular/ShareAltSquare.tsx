import * as React from "react";

const SvgShareAltSquare = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 01-6-6V86a6 6 0 016-6h340a6 6 0 016 6v340a6 6 0 01-6 6zm-58-96c0 26.51-21.49 48-48 48s-48-21.49-48-48c0-2.007.138-3.981.377-5.923l-69.131-34.565A47.768 47.768 0 01144 304c-26.51 0-48-21.49-48-48s21.49-48 48-48a47.762 47.762 0 0127.246 8.489l69.131-34.565A48.461 48.461 0 01240 176c0-26.51 21.49-48 48-48s48 21.49 48 48-21.49 48-48 48c-12.941 0-24.677-5.131-33.31-13.457l-64.54 32.27a47.935 47.935 0 010 26.374l64.54 32.27C263.323 293.13 275.059 288 288 288c26.51 0 48 21.49 48 48z" />
  </svg>
);

SvgShareAltSquare.displayName = "SvgShareAltSquare";
SvgShareAltSquare.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgShareAltSquare;

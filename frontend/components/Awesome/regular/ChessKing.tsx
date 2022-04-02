import * as React from "react";

const SvgChessKing = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M400 464H48a16 16 0 00-16 16v16a16 16 0 0016 16h352a16 16 0 0016-16v-16a16 16 0 00-16-16zm37.05-281.16A55.37 55.37 0 00391.93 160H248v-56h48a8 8 0 008-8V64a8 8 0 00-8-8h-48V8a8 8 0 00-8-8h-32a8 8 0 00-8 8v48h-48a8 8 0 00-8 8v32a8 8 0 008 8h48v56H56a55.95 55.95 0 00-53.31 73.06L68.51 432h50.54L48.38 218.38A8 8 0 0156 208h335.93a8 8 0 017.78 10l-70.82 214h50.55l66-199.31a55.35 55.35 0 00-8.39-49.85z" />
  </svg>
);

SvgChessKing.displayName = "SvgChessKing";
SvgChessKing.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgChessKing;

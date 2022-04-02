import * as React from "react";

const SvgChessKing = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M408 480H40a8 8 0 00-8 8v16a8 8 0 008 8h368a8 8 0 008-8v-16a8 8 0 00-8-8zm31.34-301.88A44 44 0 00403.51 160H240V96h56a8 8 0 008-8V72a8 8 0 00-8-8h-56V8a8 8 0 00-8-8h-16a8 8 0 00-8 8v56h-56a8 8 0 00-8 8v16a8 8 0 008 8h56v64H44.46a44.46 44.46 0 00-42.34 58L79 448h33.75L32.59 208.16A12.42 12.42 0 0144.46 192h359.05c10.57 0 13.67 10.38 12 15.88L335.2 448H369l77-230.28a44.07 44.07 0 00-6.68-39.6z" />
  </svg>
);

SvgChessKing.displayName = "SvgChessKing";
SvgChessKing.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgChessKing;

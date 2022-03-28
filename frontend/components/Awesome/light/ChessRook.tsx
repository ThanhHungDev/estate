import * as React from "react";

const SvgChessRook = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M376 480H8a8 8 0 00-8 8v16a8 8 0 008 8h368a8 8 0 008-8v-16a8 8 0 00-8-8zM352 32H32A32 32 0 000 64v167.34l56 48C56 322 57.57 372.73 45.35 448h32.47C89.44 373.48 88 326.59 88 264.66l-56-48V64h80l.09 64h32V64H240v64h32V64h80v152.66l-56 48c0 62.63-1.41 109 10.18 183.34h32.47C326.43 372.77 328 322.05 328 279.34l56-48V64a32 32 0 00-32-32zM192 192a48.05 48.05 0 00-48 48v80h96v-80a48.05 48.05 0 00-48-48zm16 96h-32v-48a16 16 0 0132 0z" />
  </svg>
);

SvgChessRook.displayName = "SvgChessRook";
SvgChessRook.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgChessRook;

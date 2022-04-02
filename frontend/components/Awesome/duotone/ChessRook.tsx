import * as React from "react";

const SvgChessRook = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path
      d="M368 448H16a16 16 0 00-16 16v32a16 16 0 0016 16h352a16 16 0 0016-16v-32a16 16 0 00-16-16z"
      opacity={0.4}
    />
    <path
      d="M384 48a16 16 0 00-16-16h-56a16 16 0 00-16 16v48h-48V48a16 16 0 00-16-16h-80a16 16 0 00-16 16v48H88.1V48a16 16 0 00-16-16H16A16 16 0 000 48v176l64 32c0 48.33-1.54 95-13.21 160h282.42C321.54 351 320 303.72 320 256l64-32zM224 320h-64v-64a32 32 0 0164 0z"
      className="chess-rook_svg__fa-primary"
    />
  </svg>
);

SvgChessRook.displayName = "SvgChessRook";
SvgChessRook.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgChessRook;

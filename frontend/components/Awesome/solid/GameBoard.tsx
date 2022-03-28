import * as React from "react";

const SvgGameBoard = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M256 160h-96v96h96zm0 192h96v-96h-96zM480 0H32A32 32 0 000 32v448a32 32 0 0032 32h448a32 32 0 0032-32V32a32 32 0 00-32-32zm-32 160h-96v96h96v96h-96v96h-96v-96h-96v96H64v-96h96v-96H64v-96h96V64h96v96h96V64h96z" />
  </svg>
);

SvgGameBoard.displayName = "SvgGameBoard";
SvgGameBoard.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgGameBoard;

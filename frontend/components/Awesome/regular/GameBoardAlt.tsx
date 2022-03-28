import * as React from "react";

const SvgGameBoardAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M480 0H32A32 32 0 000 32v448a32 32 0 0032 32h448a32 32 0 0032-32V32a32 32 0 00-32-32zm-16 464H48V48h416zm-48-48V256H256v160zM256 96H96v160h160z" />
  </svg>
);

SvgGameBoardAlt.displayName = "SvgGameBoardAlt";
SvgGameBoardAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgGameBoardAlt;

import * as React from "react";

const SvgGameBoardAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M480 0H32A32 32 0 000 32v448a32 32 0 0032 32h448a32 32 0 0032-32V32a32 32 0 00-32-32zm0 480H32V32h448zm-32-32V256H256v192zM288 288h128v128H288zM256 64H64v192h192zm-32 160H96V96h128z" />
  </svg>
);

SvgGameBoardAlt.displayName = "SvgGameBoardAlt";
SvgGameBoardAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgGameBoardAlt;

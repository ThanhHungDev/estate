import * as React from "react";

const SvgGameBoard = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M480 0H32A32 32 0 000 32v448a32 32 0 0032 32h448a32 32 0 0032-32V32a32 32 0 00-32-32zm-16 464H48V48h416zm-32-32v-88h-88v88zm0-176v-88h-88v88zM80 80v88h88V80zm264 0h-88v88h88zM168 432h88v-88h-88zm88-264h-88v88h88zm0 176h88v-88h-88zm-88-88H80v88h88z" />
  </svg>
);

SvgGameBoard.displayName = "SvgGameBoard";
SvgGameBoard.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgGameBoard;

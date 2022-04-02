import * as React from "react";

const SvgPianoKeyboard = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M544 64H32A32 32 0 000 96v320a32 32 0 0032 32h512a32 32 0 0032-32V96a32 32 0 00-32-32zM128 416H32V224h64v96a16 16 0 0016 16h16zm144 0H160v-80h16a16 16 0 0016-16v-96h48v96a16 16 0 0016 16h16zM128 304v-80h32v80zm288 112H304v-80h16a16 16 0 0016-16v-96h48v96a16 16 0 0016 16h16zM272 304v-80h32v80zm272 112h-96v-80h16a16 16 0 0016-16v-96h64zM416 304v-80h32v80zm128-112H32V96h512z" />
  </svg>
);

SvgPianoKeyboard.displayName = "SvgPianoKeyboard";
SvgPianoKeyboard.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPianoKeyboard;

import * as React from "react";

const SvgPianoKeyboard = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M544 63H32A32 32 0 000 95v320a32 32 0 0032 32h512a32 32 0 0032-32V95a32 32 0 00-32-32zM144 383H64V223h64v80a16 16 0 0016 16zm128 0h-96v-64a16 16 0 0016-16v-80h64v80a16 16 0 0016 16zm128 0h-96v-64a16 16 0 0016-16v-80h64v80a16 16 0 0016 16zm112 0h-80v-64a16 16 0 0016-16v-80h64z" />
  </svg>
);

SvgPianoKeyboard.displayName = "SvgPianoKeyboard";
SvgPianoKeyboard.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPianoKeyboard;

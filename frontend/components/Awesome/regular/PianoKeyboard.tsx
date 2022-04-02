import * as React from "react";

const SvgPianoKeyboard = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M544 64H32A32 32 0 000 96v320a32 32 0 0032 32h512a32 32 0 0032-32V96a32 32 0 00-32-32zM144 400H48V224h80v80a16 16 0 0016 16zm128 0h-96v-80a16 16 0 0016-16v-80h64v80a16 16 0 0016 16zm128 0h-96v-80a16 16 0 0016-16v-80h64v80a16 16 0 0016 16zm128 0h-96v-80a16 16 0 0016-16v-80h80zm0-224H48v-64h480z" />
  </svg>
);

SvgPianoKeyboard.displayName = "SvgPianoKeyboard";
SvgPianoKeyboard.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPianoKeyboard;

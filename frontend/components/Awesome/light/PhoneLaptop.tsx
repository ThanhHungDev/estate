import * as React from "react";

const SvgPhoneLaptop = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M608 128H416a32 32 0 00-32 32v320a32 32 0 0032 32h192a32 32 0 0032-32V160a32 32 0 00-32-32zm0 352H416V160h192zM96 32h384v64h32V32a32 32 0 00-32-32H96a32 32 0 00-32 32v256H16a16 16 0 00-16 16v16a64.14 64.14 0 0063.91 64H352v-32H63.91A32 32 0 0132 320h320v-32H96z" />
  </svg>
);

SvgPhoneLaptop.displayName = "SvgPhoneLaptop";
SvgPhoneLaptop.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPhoneLaptop;

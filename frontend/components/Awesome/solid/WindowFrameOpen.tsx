import * as React from "react";

const SvgWindowFrameOpen = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M480 32a32 32 0 00-32-32H64a32 32 0 00-32 32v256h448zM240 224H96V64h144zm176 0H272V64h144zm80 224h-16V320h-64v128H96V320H32v128H16a16 16 0 00-16 16v32a16 16 0 0016 16h480a16 16 0 0016-16v-32a16 16 0 00-16-16z" />
  </svg>
);

SvgWindowFrameOpen.displayName = "SvgWindowFrameOpen";
SvgWindowFrameOpen.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgWindowFrameOpen;

import * as React from "react";

const SvgWindowFrameOpen = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M480 32a32 32 0 00-32-32H64a32 32 0 00-32 32v224h448zM240 224H64V32h176zm208 0H272V32h176zm48 192h-16V288h-32v128H64V288H32v128H16a16 16 0 00-16 16v64a16 16 0 0016 16h480a16 16 0 0016-16v-64a16 16 0 00-16-16zm-16 64H32v-32h448z" />
  </svg>
);

SvgWindowFrameOpen.displayName = "SvgWindowFrameOpen";
SvgWindowFrameOpen.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgWindowFrameOpen;

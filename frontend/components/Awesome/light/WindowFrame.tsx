import * as React from "react";

const SvgWindowFrame = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M496 416h-16V32a32 32 0 00-32-32H64a32 32 0 00-32 32v384H16a16 16 0 00-16 16v64a16 16 0 0016 16h480a16 16 0 0016-16v-64a16 16 0 00-16-16zM272 32h176v176H272zm0 208h176v176H272zM64 32h176v176H64zm0 208h176v176H64zm416 240H32v-32h448z" />
  </svg>
);

SvgWindowFrame.displayName = "SvgWindowFrame";
SvgWindowFrame.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgWindowFrame;

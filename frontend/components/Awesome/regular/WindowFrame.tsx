import * as React from "react";

const SvgWindowFrame = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M496 464h-16V32a32 32 0 00-32-32H64a32 32 0 00-32 32v432H16a16 16 0 00-16 16v16a16 16 0 0016 16h480a16 16 0 0016-16v-16a16 16 0 00-16-16zm-264 0H80V272h152zm0-240H80V48h152zm200 240H280V272h152zm0-240H280V48h152z" />
  </svg>
);

SvgWindowFrame.displayName = "SvgWindowFrame";
SvgWindowFrame.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgWindowFrame;

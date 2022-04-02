import * as React from "react";

const SvgWindowFrameOpen = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M496 464h-16V304h-48v160H80V304H32v160H16a16 16 0 00-16 16v16a16 16 0 0016 16h480a16 16 0 0016-16v-16a16 16 0 00-16-16zM480 32a32 32 0 00-32-32H64a32 32 0 00-32 32v240h448zM232 224H80V48h152zm200 0H280V48h152z" />
  </svg>
);

SvgWindowFrameOpen.displayName = "SvgWindowFrameOpen";
SvgWindowFrameOpen.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgWindowFrameOpen;

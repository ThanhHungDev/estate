import * as React from "react";

const SvgScannerImage = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M80 408h32a8 8 0 008-8v-32a8 8 0 00-8-8H80a8 8 0 00-8 8v32a8 8 0 008 8zm96 0h32a8 8 0 008-8v-32a8 8 0 00-8-8h-32a8 8 0 00-8 8v32a8 8 0 008 8zm444.69-138.88L17.52 32.66A8 8 0 007 36.83L.66 51.52A8 8 0 004.83 62l576.39 226H32a32 32 0 00-32 32v128a32 32 0 0032 32h576a32 32 0 0032-32V298.5a32.08 32.08 0 00-19.31-29.38zM608 384v64H32V320h576z" />
  </svg>
);

SvgScannerImage.displayName = "SvgScannerImage";
SvgScannerImage.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgScannerImage;

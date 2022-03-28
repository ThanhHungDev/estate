import * as React from "react";

const SvgScannerImage = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M10.93 108.71L467.65 256h167.59l3.93-11.75a16 16 0 00-10.1-20.25L36.3 32.83a16 16 0 00-20.24 10.1L.83 88.46a16 16 0 0010.1 20.25zM32 288a32 32 0 00-32 32v128a32 32 0 0032 32h576a32 32 0 0032-32V288zm88 112a8 8 0 01-8 8H80a8 8 0 01-8-8v-32a8 8 0 018-8h32a8 8 0 018 8zm96 0a8 8 0 01-8 8h-32a8 8 0 01-8-8v-32a8 8 0 018-8h32a8 8 0 018 8z" />
  </svg>
);

SvgScannerImage.displayName = "SvgScannerImage";
SvgScannerImage.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgScannerImage;

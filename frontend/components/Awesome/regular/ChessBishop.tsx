import * as React from "react";

const SvgChessBishop = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 320 512" {...props}>
    <path d="M304 464H16a16 16 0 00-16 16v16a16 16 0 0016 16h288a16 16 0 0016-16v-16a16 16 0 00-16-16zM0 304c0 51.64 30.14 85.24 64 96v32h48v-67.11l-33.46-10.64C63.78 349.56 48 333.9 48 304c0-74.57 66.13-165.78 101.33-201.84a15.81 15.81 0 0122.27-.24c12.64 11.8 34 35.52 59.22 81.33l-66.13 66.13a16 16 0 000 22.62L176 283.31a16 16 0 0022.62 0L252.94 229c11.43 27.7 19.06 54.54 19.06 75 0 29.9-15.78 45.56-30.54 50.25L208 364.89V432h48v-32c33.86-10.76 64-44.36 64-96 0-73.38-67.81-197.2-120.6-241.49C213.4 59.09 224 47.05 224 32a32 32 0 00-32-32h-64a32 32 0 00-32 32c0 15 10.6 27.09 24.6 30.51C67.81 106.8 0 230.62 0 304z" />
  </svg>
);

SvgChessBishop.displayName = "SvgChessBishop";
SvgChessBishop.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgChessBishop;

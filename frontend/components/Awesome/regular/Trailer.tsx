import * as React from "react";

const SvgTrailer = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M176 320a80 80 0 1080 80 80 80 0 00-80-80zm0 112a32 32 0 1132-32 32 32 0 01-32 32zm448-96h-80V96a32 32 0 00-32-32H32A32 32 0 000 96v272a16 16 0 0016 16h36.58c7.59 0 13.69-5.44 15.64-12.78C80.91 323.36 124.14 288 176 288s95.09 35.36 107.78 83.22c2 7.34 8.05 12.78 15.64 12.78H624a16 16 0 0016-16v-16a16 16 0 00-16-16zm-128 0h-56V160a16 16 0 00-16-16h-16a16 16 0 00-16 16v176h-48V160a16 16 0 00-16-16h-16a16 16 0 00-16 16v135.79a158.8 158.8 0 00-48-38.09V160a16 16 0 00-16-16h-16a16 16 0 00-16 16v81.81a151.35 151.35 0 00-48 .21V160a16 16 0 00-16-16h-16a16 16 0 00-16 16v97.4a160.31 160.31 0 00-56 47.87V112h448z" />
  </svg>
);

SvgTrailer.displayName = "SvgTrailer";
SvgTrailer.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTrailer;

import * as React from "react";

const SvgUserHardHat = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M88 176h272a8 8 0 008-8v-32a8 8 0 00-8-8h-8a112 112 0 00-68.4-103.2L256 80V16a16 16 0 00-16-16h-32a16 16 0 00-16 16v64l-27.6-55.2A112 112 0 0096 128h-8a8 8 0 00-8 8v32a8 8 0 008 8zm225.6 176h-16.7a174.08 174.08 0 01-145.8 0h-16.7A134.4 134.4 0 000 486.4 25.6 25.6 0 0025.6 512h396.8a25.6 25.6 0 0025.6-25.6A134.4 134.4 0 00313.6 352zM224 320c65.22 0 118.44-48.94 126.39-112H97.61c7.95 63.06 61.17 112 126.39 112z" />
  </svg>
);

SvgUserHardHat.displayName = "SvgUserHardHat";
SvgUserHardHat.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgUserHardHat;

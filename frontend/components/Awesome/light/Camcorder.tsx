import * as React from "react";

const SvgCamcorder = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M511.88 160l.12 31.5-.22 256.37L416 381.72V258.23L511.93 192h-.07v-32a32.13 32.13 0 00-18.27 5.73L416 219.32V208a48 48 0 00-48-48H128v-48a48 48 0 0148-48h168a8 8 0 008-8V40a8 8 0 00-8-8H176a80 80 0 00-80 80v48H80a48 48 0 00-48 48v224a48 48 0 0048 48h288a48 48 0 0048-48v-11.39l77.59 53.59a32 32 0 0018.26 5.8c16.63 0 32.15-13 32.15-31.59V191.5c0-18.5-15.48-31.5-32.12-31.5zM384 432a16 16 0 01-16 16H80a16 16 0 01-16-16V208a16 16 0 0116-16h288a16 16 0 0116 16zm-38.4-208H102.4a6.41 6.41 0 00-6.4 6.4v19.2a6.41 6.41 0 006.4 6.4h243.2a6.41 6.41 0 006.4-6.4v-19.2a6.41 6.41 0 00-6.4-6.4z" />
  </svg>
);

SvgCamcorder.displayName = "SvgCamcorder";
SvgCamcorder.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCamcorder;

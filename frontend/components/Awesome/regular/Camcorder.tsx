import * as React from "react";

const SvgCamcorder = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M543.86 160a32.13 32.13 0 00-18.27 5.73l-109.59 75V224a64 64 0 00-64-64H96v-40a40 40 0 0140-40h168a16 16 0 0016-16V48a16 16 0 00-16-16H136a88 88 0 00-88 88v42.26A63.85 63.85 0 000 224v192a64 64 0 0064 64h288a64 64 0 0064-64v-16.8l109.59 75a32 32 0 0018.26 5.8c16.63 0 32.15-13 32.15-31.59V191.5c0-18.5-15.49-31.5-32.14-31.5zM368 416a16 16 0 01-16 16H64a16 16 0 01-16-16V224a16 16 0 0116-16h288a16 16 0 0116 16zm160 1.69L416 341v-42.09l112-76.68zM304 256H112a16 16 0 00-16 16v16a16 16 0 0016 16h192a16 16 0 0016-16v-16a16 16 0 00-16-16z" />
  </svg>
);

SvgCamcorder.displayName = "SvgCamcorder";
SvgCamcorder.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCamcorder;

import * as React from "react";

const SvgBellExclamation = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M236.46 290.51a31.94 31.94 0 1017 17 31.92 31.92 0 00-17-17zM246.29 128h-44.6a16.06 16.06 0 00-15.9 17.6l12.8 96a16 16 0 0015.9 14.4h19a16 16 0 0015.9-14.4l12.8-96a16 16 0 00-15.9-17.6zM224 512a64 64 0 0064-64H160a64 64 0 0064 64zm215.37-149.7c-19.31-20.77-55.46-52-55.46-154.3 0-77.7-54.47-139.91-127.94-155.16V32A32 32 0 10192 32v20.84C118.56 68.09 64.09 130.3 64.09 208c0 102.3-36.15 133.53-55.46 154.3A31.17 31.17 0 000 384c.13 16.41 13 32 32.09 32h383.82c19.12 0 32-15.59 32.09-32a31.17 31.17 0 00-8.63-21.7zM67.53 368c21.22-28 44.41-74.33 44.53-159.42 0-.2-.06-.38-.06-.58a112 112 0 01224 0c0 .2-.06.38-.06.58.12 85.11 23.31 131.47 44.53 159.42z" />
  </svg>
);

SvgBellExclamation.displayName = "SvgBellExclamation";
SvgBellExclamation.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBellExclamation;

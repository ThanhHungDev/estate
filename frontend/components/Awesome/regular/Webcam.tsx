import * as React from "react";

const SvgWebcam = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M401 438.6l-49.19-30.75C409.88 367.39 448 300.19 448 224 448 100.29 347.71 0 224 0S0 100.29 0 224c0 76.19 38.12 143.39 96.23 183.85L47 438.6a32 32 0 00-15 27.14V480a32 32 0 0032 32h320a32 32 0 0032-32v-14.26a32 32 0 00-15-27.14zM224 400a176 176 0 11176-176 176 176 0 01-176 176zm0-320c-79.41 0-144 64.59-144 144s64.59 144 144 144 144-64.59 144-144S303.41 80 224 80zm0 240a96 96 0 1196-96 96.1 96.1 0 01-96 96zm0-160a64.07 64.07 0 00-64 64 16 16 0 0032 0 32 32 0 0132-32 16 16 0 000-32z" />
  </svg>
);

SvgWebcam.displayName = "SvgWebcam";
SvgWebcam.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgWebcam;

import * as React from "react";

const SvgStretcher = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M608 128H192L79.84 10.74a32 32 0 00-45.18-2.66L10.74 29.35a32 32 0 00-2.66 45.17l121.7 128A64 64 0 00177.62 224H608a32 32 0 0032-32v-32a32 32 0 00-32-32zm-92.22 266.93a62.23 62.23 0 00-56.18-7.3l-43-37.63L524 256h-97.2L368 307.48 309.17 256H212l107.4 94-43 37.63a62.23 62.23 0 00-56.18 7.3 64.35 64.35 0 00-17.29 17.29 64.07 64.07 0 10115.82 23.4l49.25-43.1 49.25 43.1a64 64 0 1098.53-40.69zM256 464a16 16 0 1116-16 16 16 0 01-16 16zm224 0a16 16 0 1116-16 16 16 0 01-16 16z" />
  </svg>
);

SvgStretcher.displayName = "SvgStretcher";
SvgStretcher.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgStretcher;

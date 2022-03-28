import * as React from "react";

const SvgWaveSquare = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M632 240H496a32 32 0 00-32 32v176H336V64a32 32 0 00-32-32H176a32 32 0 00-32 32v176H8a8 8 0 00-8 8v16a8 8 0 008 8h136a32 32 0 0032-32V64h128v384a32 32 0 0032 32h128a32 32 0 0032-32V272h136a8 8 0 008-8v-16a8 8 0 00-8-8z" />
  </svg>
);

SvgWaveSquare.displayName = "SvgWaveSquare";
SvgWaveSquare.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgWaveSquare;

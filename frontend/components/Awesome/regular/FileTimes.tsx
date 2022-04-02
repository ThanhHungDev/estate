import * as React from "react";

const SvgFileTimes = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M369.9 98L286 14.1A48 48 0 00252.1 0H48A48.16 48.16 0 000 48.1v416a48 48 0 0048 48h288a48 48 0 0048-48V132a48.23 48.23 0 00-14.1-34zM256 52l76.1 76.1H256zm80 412.1H48v-416h160v104a23.94 23.94 0 0024 24h104zM264.85 264a16 16 0 000-22.63L253.53 230a16 16 0 00-22.63 0l-40 40-39.24-39.24a16 16 0 00-22.63 0l-11.31 11.31a16 16 0 000 22.63L157 303.92l-39.6 39.6a16 16 0 000 22.63l11.32 11.31a16 16 0 0022.63 0l39.65-39.6 40 40a16 16 0 0022.63 0l11.32-11.32a16 16 0 000-22.63l-40-39.95z" />
  </svg>
);

SvgFileTimes.displayName = "SvgFileTimes";
SvgFileTimes.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFileTimes;

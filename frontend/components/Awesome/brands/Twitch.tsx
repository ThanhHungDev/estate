import * as React from "react";

const SvgTwitch = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M391.17 103.47h-38.63v109.7h38.63zM285 103h-38.63v109.75H285zM120.83 0L24.31 91.42v329.16h115.83V512l96.53-91.42h77.25L487.69 256V0zm328.24 237.75l-77.22 73.12h-77.24l-67.6 64v-64h-86.87V36.58h308.93z" />
  </svg>
);

SvgTwitch.displayName = "SvgTwitch";
SvgTwitch.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTwitch;

import * as React from "react";

const SvgRainbow = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M287.83 224a96.24 96.24 0 00-18.93 1.9c-45.6 8.9-76.9 51.5-76.9 97.9V464a16 16 0 0016 16h32a16 16 0 0016-16V320a32 32 0 0164 0v144a16 16 0 0016 16h32a16 16 0 0016-16V320a96.11 96.11 0 00-96.17-96zM268.3 32.67C115.4 42.87 0 176.87 0 330.17V464a16 16 0 0016 16h32a16 16 0 0016-16V320C64 186.8 180.9 80.3 317.5 97.9 430.4 112.37 512 214 512 327.77V464a16 16 0 0016 16h32a16 16 0 0016-16V320c0-165.33-140-298.63-307.7-287.33z"
      opacity={0.4}
    />
    <path
      d="M480 320v144a16 16 0 01-16 16h-32a16 16 0 01-16-16V325.69c0-66.89-48.7-126.58-115.2-133.08C224.5 185.21 160 245.2 160 320v144a16 16 0 01-16 16h-32a16 16 0 01-16-16V326.69c0-97.58 70-184.69 166.7-197.07C379.8 114.62 480 205.81 480 320z"
      className="rainbow_svg__fa-primary"
    />
  </svg>
);

SvgRainbow.displayName = "SvgRainbow";
SvgRainbow.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgRainbow;

import * as React from "react";

const SvgPalletAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M80 256h224c8.8 0 16-7.2 16-16V16c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16zm320 0h160c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16H400c-8.8 0-16 7.2-16 16v160c0 8.8 7.2 16 16 16zm224 128c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h48v64H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h608c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-48v-64h48zm-336 64H128v-64h160v64zm224 0H352v-64h160v64z" />
  </svg>
);

SvgPalletAlt.displayName = "SvgPalletAlt";
SvgPalletAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPalletAlt;

import * as React from "react";

const SvgTurntable = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M224 112a144 144 0 10144 144 144 144 0 00-144-144zm0 168a24 24 0 1124-24 24 24 0 01-24 24zm248-152h-16a16 16 0 00-16 16v99.71a31.88 31.88 0 01-2.95 13.41L416 302.8a15.69 15.69 0 00-11.75 8.35l-25.69 51.38a16 16 0 007.13 21.47l28.62 14.32a16 16 0 0021.47-7.16l25.69-51.38a15.89 15.89 0 00-1.85-17l25.43-55.1a32 32 0 002.95-13.44V144a16 16 0 00-16-16zm40-96H64A64 64 0 000 96v320a64 64 0 0064 64h448a64 64 0 0064-64V96a64 64 0 00-64-64zm16 384a16 16 0 01-16 16H64a16 16 0 01-16-16V96a16 16 0 0116-16h448a16 16 0 0116 16z" />
  </svg>
);

SvgTurntable.displayName = "SvgTurntable";
SvgTurntable.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTurntable;

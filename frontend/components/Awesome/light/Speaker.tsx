import * as React from "react";

const SvgSpeaker = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M192 192a64 64 0 10-64-64 64 64 0 0064 64zm0-96a32 32 0 11-32 32 32 32 0 0132-32zm0 128a112 112 0 10112 112 112 112 0 00-112-112zm0 192a80 80 0 1180-80 80.09 80.09 0 01-80 80zm0-112a32 32 0 1032 32 32 32 0 00-32-32zM336 0H48A48 48 0 000 48v416a48 48 0 0048 48h288a48 48 0 0048-48V48a48 48 0 00-48-48zm16 464a16 16 0 01-16 16H48a16 16 0 01-16-16V48a16 16 0 0116-16h288a16 16 0 0116 16z" />
  </svg>
);

SvgSpeaker.displayName = "SvgSpeaker";
SvgSpeaker.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSpeaker;

import * as React from "react";

const SvgSpeaker = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M192 272a64 64 0 1064 64 64 64 0 00-64-64zM336 0H48A48 48 0 000 48v416a48 48 0 0048 48h288a48 48 0 0048-48V48a48 48 0 00-48-48zM192 64a48 48 0 11-48 48 48 48 0 0148-48zm0 384a112 112 0 11112-112 112 112 0 01-112 112z" />
  </svg>
);

SvgSpeaker.displayName = "SvgSpeaker";
SvgSpeaker.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSpeaker;

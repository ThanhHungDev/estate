import * as React from "react";

const SvgSpeaker = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M193 176a48 48 0 10-48-48 48 48 0 0048 48zm0 256A112 112 0 1081 320a112 112 0 00112 112zm0-176a64 64 0 11-64 64 64 64 0 0164-64zM337 0H49A48 48 0 001 48v416a48 48 0 0048 48h288a48 48 0 0048-48V48a48 48 0 00-48-48zm0 464H49V48h288z" />
  </svg>
);

SvgSpeaker.displayName = "SvgSpeaker";
SvgSpeaker.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSpeaker;

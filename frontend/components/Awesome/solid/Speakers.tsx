import * as React from "react";

const SvgSpeakers = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M591 0H335a48 48 0 00-48 48v416a48 48 0 0048 48h256a48 48 0 0048-48V48a48 48 0 00-48-48zM463 64a48 48 0 11-48 48 48 48 0 0148-48zm0 384a112 112 0 11112-112 112 112 0 01-112 112zm0-176a64 64 0 1064 64 64 64 0 00-64-64zM255 48a79.24 79.24 0 0116.41-48H47A48 48 0 00-1 48v416a48 48 0 0048 48h224.41A79.24 79.24 0 01255 464v-49.78a112 112 0 110-156.44zm-80 112a48 48 0 1148-48 48 48 0 01-48 48zm-64 176a64 64 0 1064-64 64 64 0 00-64 64z" />
  </svg>
);

SvgSpeakers.displayName = "SvgSpeakers";
SvgSpeakers.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSpeakers;

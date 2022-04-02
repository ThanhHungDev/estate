import * as React from "react";

const SvgChessClock = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M464 416a112 112 0 10-112-112 112 112 0 00112 112zm0-192a79.42 79.42 0 0143.85 13.22l-56.52 56.53a12 12 0 000 17l5.65 5.65a12 12 0 0017 0l56.6-56.6A79.93 79.93 0 11464 224zM176 416A112 112 0 1064 304a112 112 0 00112 112zm-16-190.37V308a12 12 0 0012 12h8a12 12 0 0012-12v-82.37a80 80 0 11-32 0zM608 128h-72a8 8 0 008-8v-16a8 8 0 00-8-8H392a8 8 0 00-8 8v16a8 8 0 008 8H192V64h56a8 8 0 008-8V40a8 8 0 00-8-8H104a8 8 0 00-8 8v16a8 8 0 008 8h56v64H32a32 32 0 00-32 32v288a32 32 0 0032 32h576a32 32 0 0032-32V160a32 32 0 00-32-32zm0 320H32V160h576z" />
  </svg>
);

SvgChessClock.displayName = "SvgChessClock";
SvgChessClock.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgChessClock;

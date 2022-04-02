import * as React from "react";

const SvgClock = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm92.49 313l-20 25a16 16 0 01-22.49 2.5l-67-49.72a40 40 0 01-15-31.23V112a16 16 0 0116-16h32a16 16 0 0116 16v144l58 42.5a16 16 0 012.49 22.5z" />
  </svg>
);

SvgClock.displayName = "SvgClock";
SvgClock.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgClock;

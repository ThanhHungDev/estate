import * as React from "react";

const SvgCircle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm216 248c0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216z" />
  </svg>
);

SvgCircle.displayName = "SvgCircle";
SvgCircle.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCircle;

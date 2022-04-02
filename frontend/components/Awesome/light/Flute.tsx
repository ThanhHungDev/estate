import * as React from "react";

const SvgFlute = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M512 280a24 24 0 10-24-24 24 24 0 0024 24zm-192 0a24 24 0 10-24-24 24 24 0 0024 24zm96 0a24 24 0 10-24-24 24 24 0 0024 24zm192-120H32a32 32 0 00-32 32v128a32 32 0 0032 32h576a32 32 0 0032-32V192a32 32 0 00-32-32zM112 320H32V192h80zm496 0H144V192h464z" />
  </svg>
);

SvgFlute.displayName = "SvgFlute";
SvgFlute.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFlute;

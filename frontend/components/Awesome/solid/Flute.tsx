import * as React from "react";

const SvgFlute = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M0 208v96a32 32 0 0032 32h64V176H32a32 32 0 00-32 32zm608-32H128v160h480a32 32 0 0032-32v-96a32 32 0 00-32-32zM320 280a24 24 0 1124-24 24 24 0 01-24 24zm96 0a24 24 0 1124-24 24 24 0 01-24 24zm96 0a24 24 0 1124-24 24 24 0 01-24 24z" />
  </svg>
);

SvgFlute.displayName = "SvgFlute";
SvgFlute.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFlute;

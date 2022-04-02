import * as React from "react";

const SvgPauseCircle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M218 160h-20c-3.3 0-6 2.7-6 6v180c0 3.3 2.7 6 6 6h20c3.3 0 6-2.7 6-6V166c0-3.3-2.7-6-6-6zm96 0h-20c-3.3 0-6 2.7-6 6v180c0 3.3 2.7 6 6 6h20c3.3 0 6-2.7 6-6V166c0-3.3-2.7-6-6-6zM256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 464c-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216 0 118.7-96.1 216-216 216z" />
  </svg>
);

SvgPauseCircle.displayName = "SvgPauseCircle";
SvgPauseCircle.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPauseCircle;

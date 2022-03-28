import * as React from "react";

const SvgWalkieTalkie = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M352 96h-32V80a16 16 0 00-16-16h-32a16 16 0 00-16 16v16h-32V80a16 16 0 00-16-16h-32a16 16 0 00-16 16v16h-48V16A16 16 0 0096 0H80a16 16 0 00-16 16v80H32a32.09 32.09 0 00-32 32v178.74a32 32 0 009.37 22.63L32 352v112a48 48 0 0048 48h224a48 48 0 0048-48V352l22.63-22.63a32 32 0 009.37-22.63V128a32.09 32.09 0 00-32-32zm-16 204.12l-17.94 17.94L304 332.12V464H80V332.12l-14.06-14.06L48 300.12V144h288zM128 240h128a16 16 0 0016-16v-16a16 16 0 00-16-16H128a16 16 0 00-16 16v16a16 16 0 0016 16zm0 80h128a16 16 0 0016-16v-16a16 16 0 00-16-16H128a16 16 0 00-16 16v16a16 16 0 0016 16z" />
  </svg>
);

SvgWalkieTalkie.displayName = "SvgWalkieTalkie";
SvgWalkieTalkie.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgWalkieTalkie;

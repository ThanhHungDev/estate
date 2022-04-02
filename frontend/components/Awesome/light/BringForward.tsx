import * as React from "react";

const SvgBringForward = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M352 304V48a48 48 0 00-48-48H48A48 48 0 000 48v256a48 48 0 0048 48h256a48 48 0 0048-48zm-320 0V48a16 16 0 0116-16h256a16 16 0 0116 16v256a16 16 0 01-16 16H48a16 16 0 01-16-16zm432-144h-80v32h80a16 16 0 0116 16v256a16 16 0 01-16 16H208a16 16 0 01-16-16v-80h-32v80a48 48 0 0048 48h256a48 48 0 0048-48V208a48 48 0 00-48-48zm-48 256H256v-32h-32v48a16 16 0 0016 16h192a16 16 0 0016-16V240a16 16 0 00-16-16h-48v32h32z" />
  </svg>
);

SvgBringForward.displayName = "SvgBringForward";
SvgBringForward.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBringForward;

import * as React from "react";

const SvgUnderline = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M32 48h32v208c0 88.22 71.78 160 160 160s160-71.78 160-160V48h32a16 16 0 0016-16V16a16 16 0 00-16-16H288a16 16 0 00-16 16v16a16 16 0 0016 16h32v208a96 96 0 01-192 0V48h32a16 16 0 0016-16V16a16 16 0 00-16-16H32a16 16 0 00-16 16v16a16 16 0 0016 16zm400 416H16a16 16 0 00-16 16v16a16 16 0 0016 16h416a16 16 0 0016-16v-16a16 16 0 00-16-16z" />
  </svg>
);

SvgUnderline.displayName = "SvgUnderline";
SvgUnderline.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgUnderline;

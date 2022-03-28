import * as React from "react";

const SvgSignalAlt1 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M96 416v64H64v-64h32m0-32H64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32z" />
  </svg>
);

SvgSignalAlt1.displayName = "SvgSignalAlt1";
SvgSignalAlt1.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSignalAlt1;

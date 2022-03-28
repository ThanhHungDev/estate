import * as React from "react";

const SvgSignalAlt2 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M256 288v192h-32V288h32M96 416v64H64v-64h32m160-160h-32c-17.67 0-32 14.33-32 32v192c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V288c0-17.67-14.33-32-32-32zM96 384H64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32z" />
  </svg>
);

SvgSignalAlt2.displayName = "SvgSignalAlt2";
SvgSignalAlt2.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSignalAlt2;

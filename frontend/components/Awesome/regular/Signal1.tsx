import * as React from "react";

const SvgSignal1 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M80 384H48c-8.84 0-16 7.16-16 16v96c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-96c0-8.84-7.16-16-16-16z" />
  </svg>
);

SvgSignal1.displayName = "SvgSignal1";
SvgSignal1.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSignal1;

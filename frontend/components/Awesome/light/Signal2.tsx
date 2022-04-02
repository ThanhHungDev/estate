import * as React from "react";

const SvgSignal2 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M208 288h-32c-4.42 0-8 3.58-8 8v208c0 4.42 3.58 8 8 8h32c4.42 0 8-3.58 8-8V296c0-4.42-3.58-8-8-8zM80 384H48c-4.42 0-8 3.58-8 8v112c0 4.42 3.58 8 8 8h32c4.42 0 8-3.58 8-8V392c0-4.42-3.58-8-8-8z" />
  </svg>
);

SvgSignal2.displayName = "SvgSignal2";
SvgSignal2.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSignal2;

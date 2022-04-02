import * as React from "react";

const SvgSignal = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M208 288h-32c-8.84 0-16 7.16-16 16v192c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V304c0-8.84-7.16-16-16-16zM80 384H48c-8.84 0-16 7.16-16 16v96c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-96c0-8.84-7.16-16-16-16zm256-192h-32c-8.84 0-16 7.16-16 16v288c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V208c0-8.84-7.16-16-16-16zm128-96h-32c-8.84 0-16 7.16-16 16v384c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V112c0-8.84-7.16-16-16-16zM592 0h-32c-8.84 0-16 7.16-16 16v480c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V16c0-8.84-7.16-16-16-16z" />
  </svg>
);

SvgSignal.displayName = "SvgSignal";
SvgSignal.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSignal;

import * as React from "react";

const SvgSignal3 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M472 96h-48a16 16 0 00-16 16v384a16 16 0 0016 16h48a16 16 0 0016-16V112a16 16 0 00-16-16zM600 0h-48a16 16 0 00-16 16v480a16 16 0 0016 16h48a16 16 0 0016-16V16a16 16 0 00-16-16z"
      opacity={0.4}
    />
    <path
      d="M88 384H40a16 16 0 00-16 16v96a16 16 0 0016 16h48a16 16 0 0016-16v-96a16 16 0 00-16-16zm256-192h-48a16 16 0 00-16 16v288a16 16 0 0016 16h48a16 16 0 0016-16V208a16 16 0 00-16-16zm-128 96h-48a16 16 0 00-16 16v192a16 16 0 0016 16h48a16 16 0 0016-16V304a16 16 0 00-16-16z"
      className="signal-3_svg__fa-primary"
    />
  </svg>
);

SvgSignal3.displayName = "SvgSignal3";
SvgSignal3.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSignal3;

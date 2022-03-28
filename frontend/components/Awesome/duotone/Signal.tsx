import * as React from "react";

const SvgSignal = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <defs>
      <style />
    </defs>
    <path
      d="M216 288h-48a16 16 0 00-16 16v192a16 16 0 0016 16h48a16 16 0 0016-16V304a16 16 0 00-16-16zM88 384H40a16 16 0 00-16 16v96a16 16 0 0016 16h48a16 16 0 0016-16v-96a16 16 0 00-16-16zm256-192h-48a16 16 0 00-16 16v288a16 16 0 0016 16h48a16 16 0 0016-16V208a16 16 0 00-16-16zM600 0h-48a16 16 0 00-16 16v480a16 16 0 0016 16h48a16 16 0 0016-16V16a16 16 0 00-16-16zM472 96h-48a16 16 0 00-16 16v384a16 16 0 0016 16h48a16 16 0 0016-16V112a16 16 0 00-16-16z"
      className="signal_svg__fa-primary"
    />
  </svg>
);

SvgSignal.displayName = "SvgSignal";
SvgSignal.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSignal;

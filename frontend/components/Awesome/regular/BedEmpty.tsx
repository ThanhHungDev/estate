import * as React from "react";

const SvgBedEmpty = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M528 128H48V80a16 16 0 00-16-16H16A16 16 0 000 80v352a16 16 0 0016 16h16a16 16 0 0016-16v-48h544v48a16 16 0 0016 16h16a16 16 0 0016-16V240a112 112 0 00-112-112zM160 336H48V176h112zm432 0H208V176h320a64.07 64.07 0 0164 64z" />
  </svg>
);

SvgBedEmpty.displayName = "SvgBedEmpty";
SvgBedEmpty.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBedEmpty;

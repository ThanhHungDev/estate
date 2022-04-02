import * as React from "react";

const SvgBedEmpty = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M112 256h96a16 16 0 0016-16v-96a16 16 0 00-16-16h-96a16 16 0 00-16 16v96a16 16 0 0016 16zm416-128H272a16 16 0 00-16 16v144H64V80a16 16 0 00-16-16H16A16 16 0 000 80v352a16 16 0 0016 16h32a16 16 0 0016-16v-48h512v48a16 16 0 0016 16h32a16 16 0 0016-16V240a112 112 0 00-112-112z" />
  </svg>
);

SvgBedEmpty.displayName = "SvgBedEmpty";
SvgBedEmpty.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBedEmpty;

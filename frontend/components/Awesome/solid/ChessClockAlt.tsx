import * as React from "react";

const SvgChessClockAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M600 128H487.75V80H528a16 16 0 0016-16V48a16 16 0 00-16-16H400a16 16 0 00-16 16v16a16 16 0 0016 16h39.75v48H255.91v-16a16 16 0 00-16-16h-128a16 16 0 00-16 16v16H40a40.17 40.17 0 00-40 40.11V440a40 40 0 0040 40h560a40 40 0 0040-40V168.11A40.17 40.17 0 00600 128zM175.93 416.06a112 112 0 11112-111.95 112 112 0 01-112 111.95zm287.89 0a112 112 0 11112-111.95 112 112 0 01-112 111.95zM231.12 243a12 12 0 00-17 0l-50.89 50.89a12 12 0 000 17l5.66 5.66a12 12 0 0017 0l50.89-50.9a12 12 0 000-17zm236.7-18.84h-8a12 12 0 00-12 12v72a12 12 0 0012 12h8a12 12 0 0012-12v-72a12 12 0 00-12-12.02z" />
  </svg>
);

SvgChessClockAlt.displayName = "SvgChessClockAlt";
SvgChessClockAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgChessClockAlt;

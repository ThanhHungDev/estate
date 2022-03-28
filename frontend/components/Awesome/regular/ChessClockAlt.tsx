import * as React from "react";

const SvgChessClockAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M600 96H487.94V48h40a16 16 0 0016-16V16A16 16 0 00528 0H400a16 16 0 00-16 16v16a16 16 0 0016 16h40v48H256V80a16 16 0 00-16-16H112a16 16 0 00-16 16v16H40a40 40 0 00-40 40v336a40 40 0 0040 40h560a40 40 0 0040-40V136a40 40 0 00-40-40zm-8 368H48V144h544zm-400-47.94A112 112 0 1080 304.11a112 112 0 00112 111.95zm-12.67-122.19L230.24 243a12 12 0 0117 0l5.65 5.65a12 12 0 010 17L202 316.49a12 12 0 01-17 0l-5.66-5.66a12 12 0 01-.01-16.96zM448 415.91A112 112 0 10336 304a112 112 0 00112 111.91zM432 236a12 12 0 0112-12h8a12 12 0 0112 12v72a12 12 0 01-12 12h-8a12 12 0 01-12-12z" />
  </svg>
);

SvgChessClockAlt.displayName = "SvgChessClockAlt";
SvgChessClockAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgChessClockAlt;

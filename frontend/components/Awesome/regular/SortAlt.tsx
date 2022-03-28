import * as React from "react";

const SvgSortAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M164 384h-44V48a16 16 0 00-16-16H88a16 16 0 00-16 16v336H28a12 12 0 00-8.73 20.24l68 72a12 12 0 0017.44 0l68-72A12 12 0 00164 384zm200.72-276.24l-68-72a12 12 0 00-17.44 0l-68 72A12 12 0 00220 128h44v336a16 16 0 0016 16h16a16 16 0 0016-16V128h44a12 12 0 008.72-20.24z" />
  </svg>
);

SvgSortAlt.displayName = "SvgSortAlt";
SvgSortAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSortAlt;

import * as React from "react";

const SvgExternalLinkAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M432 288h-16a16 16 0 00-16 16v154a6 6 0 01-6 6H54a6 6 0 01-6-6V118a6 6 0 016-6h154a16 16 0 0016-16V80a16 16 0 00-16-16H48a48 48 0 00-48 48v352a48 48 0 0048 48h352a48 48 0 0048-48V304a16 16 0 00-16-16zM500 0H364a12 12 0 00-8.48 20.48l48.19 48.21-272.2 272.2a12 12 0 000 17l22.63 22.63a12 12 0 0017 0l272.2-272.21 48.21 48.2A12 12 0 00512 148V12a12 12 0 00-12-12z" />
  </svg>
);

SvgExternalLinkAlt.displayName = "SvgExternalLinkAlt";
SvgExternalLinkAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgExternalLinkAlt;

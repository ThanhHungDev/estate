import * as React from "react";

const SvgExternalLinkAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M440 256h-16a8 8 0 00-8 8v200a16 16 0 01-16 16H48a16 16 0 01-16-16V112a16 16 0 0116-16h200a8 8 0 008-8V72a8 8 0 00-8-8H48a48 48 0 00-48 48v352a48 48 0 0048 48h352a48 48 0 0048-48V264a8 8 0 00-8-8zM480 0h-.06l-96.16.17c-28.45 0-42.66 34.54-22.58 54.62l35.28 35.28-265 265a12 12 0 000 17l8.49 8.49a12 12 0 0017 0l265-265 35.28 35.27c20 20 54.57 6 54.62-22.57l.13-96.21A32 32 0 00480 0zm-.17 128.17l-96-96L480 32z" />
  </svg>
);

SvgExternalLinkAlt.displayName = "SvgExternalLinkAlt";
SvgExternalLinkAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgExternalLinkAlt;

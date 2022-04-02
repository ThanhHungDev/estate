import * as React from "react";

const SvgPhoneAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M493.09 351.3L384.7 304.8a31.36 31.36 0 00-36.5 8.9l-44.1 53.9A350 350 0 01144.5 208l53.9-44.1a31.35 31.35 0 008.9-36.49l-46.5-108.5A31.33 31.33 0 00125 .81L24.2 24.11A31.05 31.05 0 000 54.51C0 307.8 205.3 512 457.49 512A31.23 31.23 0 00488 487.7L511.19 387a31.21 31.21 0 00-18.1-35.7zM456.89 480C222.4 479.7 32.3 289.7 32.1 55.21l99.6-23 46 107.39-72.8 59.5C153.3 302.3 209.4 358.6 313 407.2l59.5-72.8 107.39 46z" />
  </svg>
);

SvgPhoneAlt.displayName = "SvgPhoneAlt";
SvgPhoneAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPhoneAlt;
